import React, { Component } from "react";
import s from "./ContactList.module.scss";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsVisible: false,
    };
  }

  toggleContactsVisibility = () => {
    this.setState((prevState) => ({
      contactsVisible: !prevState.contactsVisible,
    }));
  };

  render() {
    return (
      <div className={s.menu}>
        <div className={s.wrapper}>
          <div className={s.mainBtn}>
            <div onClick={this.toggleContactsVisibility}>
              <IoChatbubbleEllipsesSharp />
            </div>
          </div>
        </div>

        <div
          className={`${s.hidenBtns} ${
            this.state.contactsVisible ? s.visible : ""
          }`}
        >
          <div className={s.wrapper}>
            <div className={s.mainBtn}>
              <a className={s.tel} href="tel:+380630000000">
                <FaPhoneSquareAlt />
              </a>
            </div>
          </div>

          <div className={s.wrapper}>
            <div className={s.mainBtn}>
              <a href="instagram.com" className={s.insta}>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={s.wrapper}>
            <div className={s.mainBtn}>
              <a href="facebook.com" className={s.facebook}>
                <FaFacebookSquare />
              </a>
            </div>
          </div>

          <div className={s.wrapper}>
            <div className={s.mainBtn}>
              <a href="telegram.com" className={s.telegram}>
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;