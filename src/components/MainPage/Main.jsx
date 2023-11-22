import React, { Component } from 'react';
import s from './Main.module.scss';
import AboutMePage from '../AboutMePage/AboutMePage';
import PriceGrid from 'components/PriceGrid/PriceGrid';
import Hero from 'components/Hero/Hero';

export class Main extends Component {
  render() {
    return (
      <>
        <div className={s.main}>
          <Hero />
          <PriceGrid />
          <AboutMePage />
        </div>
      </>
    );
  }
}

export default Main;
