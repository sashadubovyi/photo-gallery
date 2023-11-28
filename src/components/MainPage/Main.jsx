import React, { Component } from 'react';
import s from './Main.module.scss';
import AboutMePage from '../AboutMePage/AboutMePage';
import PriceGrid from 'components/PriceGrid/PriceGrid';
import Hero from 'components/Hero/Hero';
import InstagramPage from 'components/InstagramPage/InstagramPage';

export class Main extends Component {
  render() {
    return (
      <>
        <div className={s.main}>
          <Hero />
          <PriceGrid />
          <AboutMePage />
          <InstagramPage />
        </div>
      </>
    );
  }
}

export default Main;
