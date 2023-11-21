import React, { Component } from "react";
import s from "./Main.module.scss";

import Gallery from "../Gallery/Gallery";
import AboutMePage from "../AboutMePage/AboutMePage";

export class Main extends Component {
  render() {
    return (
      <>
        <div className={s.main}>
          <AboutMePage />
          <Gallery toggleContactsVisibility={this.toggleContactsVisibility} />
        </div>
      </>
    );
  }
}

export default Main;
