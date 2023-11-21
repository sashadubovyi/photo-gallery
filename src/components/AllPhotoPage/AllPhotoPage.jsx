import React, { Component } from "react";
import s from "./AllPhotoPage.module.scss";
import { NavLink } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { TbZoomInAreaFilled } from "react-icons/tb";

export class AllPhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURLs: [],
    };
  }

  async componentDidMount() {
    const folderNames = ["solo", "weddings", "family", "kids"];

    const photoURLs = await Promise.all(
      folderNames.map(async (folder) => {
        const folderRef = ref(storage, `images/${folder}`);
        const imagesList = await listAll(folderRef);

        return Promise.all(
          imagesList.items.map(async (imageRef) => {
            return getDownloadURL(imageRef);
          })
        );
      })
    );

    const flattenedURLs = photoURLs.flat();

    this.setState({ photoURLs: flattenedURLs });
  }

  render() {
    const { photoURLs } = this.state;

    return (
      <>
        <div className={s.wrapper}>
          <div className={s.mainBtn}>
            <NavLink className={s.backBtn} to="/">
              <IoArrowBackSharp />
            </NavLink>
          </div>
        </div>

        <div className={s.container}>
          {photoURLs.map((url, index) => (
            <div className={s.imgBox} key={index}>
              <img className={s.image} src={url} alt={`desc-${index}`} />
              <span className={s.zoomImg}>
                <TbZoomInAreaFilled />
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default AllPhotoPage;
