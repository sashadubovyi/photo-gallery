import React, { Component } from "react";
import s from "./AllPhotoPage.module.scss";
import { NavLink } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { TbZoomInAreaFilled } from "react-icons/tb";

export class FamilyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURLs: [],
    };
  }

  async componentDidMount() {
    const folderName = "family";

    const folderRef = ref(storage, `images/${folderName}`);
    const imagesList = await listAll(folderRef);

    const photoURLs = await Promise.all(
      imagesList.items.map(async (imageRef) => {
        return getDownloadURL(imageRef);
      })
    );

    this.setState({ photoURLs });
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
              <img
                loading="lazy"
                className={s.image}
                src={url}
                alt={`desc-${index}`}
              />
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

export default FamilyPage;
