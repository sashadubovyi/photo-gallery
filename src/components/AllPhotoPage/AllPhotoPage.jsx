import React, { Component } from 'react';
import s from './AllPhotoPage.module.scss';
import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebaseConfig';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import RenderPhoto from 'components/RenderPhoto/RenderPhoto';

export class AllPhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURLs: [],
    };
  }

  async componentDidMount() {
    const folderNames = [
      'solo',
      'weddings',
      'family',
      'kids',
      'bussines',
      'pregnant',
    ];

    const photoURLs = await Promise.all(
      folderNames.map(async folder => {
        const folderRef = ref(storage, `images/${folder}`);
        const imagesList = await listAll(folderRef);

        return Promise.all(
          imagesList.items.map(async imageRef => {
            return getDownloadURL(imageRef);
          })
        );
      })
    );

    const flattenedURLs = photoURLs.flat();

    this.setState({ photoURLs: flattenedURLs });
  }

  openModal = index => {
    this.setState({
      modalOpen: true,
      selectedPhotoIndex: index,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      selectedPhotoIndex: null,
    });
  };

  render() {
    const { photoURLs, modalOpen, selectedPhotoIndex } = this.state;

    return (
      <>
        <div className={s.wrapper}>
          <div className={s.mainBtn}>
            <NavLink className={s.backBtn} to="/">
              <IoArrowBackSharp />
            </NavLink>
          </div>
        </div>

        <RenderPhoto photoURLs={photoURLs} openModal={this.openModal} />

        {modalOpen && (
          <div className={s.modal}>
            <div className={s.modalContent} onClick={this.closeModal}>
              {selectedPhotoIndex !== null && (
                <img
                  className={s.modalImage}
                  src={photoURLs[selectedPhotoIndex]}
                  alt={`desc-${selectedPhotoIndex}`}
                  onClick={e => e.stopPropagation()}
                />
              )}
              <IoIosCloseCircleOutline className={s.closeBtn} />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default AllPhotoPage;
