import React, { Component } from 'react';
import s from './AdminPanel.module.scss';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { auth } from '../../firebaseConfig';
import { PiPersonSimpleRunFill } from 'react-icons/pi';

const firebaseConfig = {
  apiKey: 'AIzaSyBV36jpX-P4riejmVYQlexhyen4DEijUyU',
  authDomain: 'photo-gallery-478c0.firebaseapp.com',
  projectId: 'photo-gallery-478c0',
  storageBucket: 'photo-gallery-478c0.appspot.com',
  messagingSenderId: '948924880062',
  appId: '1:948924880062:web:1458bd90eacf61bedefaef',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const folderOptions = [
  'solo',
  'wedings',
  'family',
  'kids',
  'bussines',
  'pregnant',
];

export class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: [],
      uploadProgress: 0,
      uploadedImageUrls: [],
      selectedFolder: folderOptions[0],
    };
  }

  getFiles(event) {
    const selectedFiles = event.target.files;
    this.setState({ selectedFiles });

    if (selectedFiles.length > 0) {
      const reader = new FileReader();

      reader.onload = e => {
        const uploadedImageUrls = Array.from(selectedFiles).map(file =>
          URL.createObjectURL(file)
        );

        this.setState({ uploadedImageUrls });
      };

      reader.readAsDataURL(selectedFiles[0]);
    }
  }

  handleFolderChange(event) {
    this.setState({ selectedFolder: event.target.value });
  }

  async uploadImages() {
    const { selectedFiles, selectedFolder } = this.state;

    if (selectedFiles.length === 0) {
      console.error('Файли не вибрані!');
      return;
    }

    const uploadPromises = Array.from(selectedFiles).map(file => {
      const storageRef = ref(storage, `images/${selectedFolder}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ uploadProgress: progress });
          },
          error => {
            console.error('Помилка завантаження файлу:', error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(downloadURL => {
                console.log('Файл доступний за адресою', downloadURL);
                resolve(downloadURL);
              })
              .catch(error => reject(error));
          }
        );
      });
    });

    try {
      const uploadedImageUrls = await Promise.all(uploadPromises);
      this.setState({
        uploadedImageUrls,
        uploadProgress: 0,
        selectedFiles: [],
      });
    } catch (error) {
      console.error('Помилка завантаження файлів:', error);
    }
  }

  handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  render() {
    const { uploadProgress, uploadedImageUrls, selectedFolder } = this.state;

    return (
      <>
        <button className={s.logoutButton} onClick={this.handleLogout}>
          <PiPersonSimpleRunFill />
        </button>

        <div className={s.uploadContainer}>
          <div className={s.folderSelect}></div>
          <input
            type="file"
            className={s.inputFile}
            id="fileInp"
            onChange={event => this.getFiles(event)}
            accept="image/png, image/jpeg, image/jpg"
            ref={this.fileInputRef}
            multiple
          />
          <label htmlFor="fileInp">
            {uploadedImageUrls.length === 0 ? (
              <p>+</p>
            ) : (
              uploadedImageUrls.map((url, index) => (
                <div key={index} className={s.imageContainer}>
                  <img
                    className={s.imageSmall}
                    src={url}
                    alt={`Обране фото ${index + 1}`}
                  />
                  <button
                    className={s.deleteButton}
                    onClick={() => {
                      const newImages = [...uploadedImageUrls];
                      newImages.splice(index, 1);
                      this.setState({ uploadedImageUrls: newImages });
                    }}
                  >
                    x
                  </button>
                </div>
              ))
            )}
          </label>

          <span className={s.fileText}></span>

          <select
            value={selectedFolder}
            onChange={e => this.handleFolderChange(e)}
          >
            {folderOptions.map(folder => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </select>

          <button
            className={s.uploadPhotoBtn}
            onClick={() => this.uploadImages()}
          >
            ЗАВАНТАЖИТИ ФОТО
          </button>
          <div className={s.bar}>
            <div
              className={s.progress}
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <div className={s.uploadPercentage}>{uploadProgress}%</div>
        </div>
      </>
    );
  }
}

export default AdminPanel;
