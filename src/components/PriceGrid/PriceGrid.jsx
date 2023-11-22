import React from 'react';
import s from './PriceGrid.module.scss';
import cKids from '../../images/test/card-kids.jpg';
import cFamily from '../../images/test/card-family.jpg';
import cSolo from '../../images/test/card-solo.jpg';
import cPregnant from '../../images/test/card-pregnant.jpg';
import cWedding from '../../images/test/card-wedding.jpg';
import cBussines from '../../images/test/card-bussines.jpg';
import { NavLink } from 'react-router-dom';
import { MdTouchApp } from 'react-icons/md';

const PriceGrid = () => {
  return (
    <div className={s.section}>
      <h1 className={s.mainTitle}>MY PRICE</h1>
      <div className={s.container}>
        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cBussines} alt="description-price" />
          <p className={s.cardTitle}>BUSSINES</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 150$</p>
          </div>
          <NavLink to="/bussines-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>

        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cKids} alt="description-price" />
          <p className={s.cardTitle}>KIDS</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 200$</p>
          </div>
          <NavLink to="/kids-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>

        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cFamily} alt="description-price" />
          <p className={s.cardTitle}>FAMILY</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 250$</p>
          </div>
          <NavLink to="/family-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>

        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cSolo} alt="description-price" />
          <p className={s.cardTitle}>SOLO</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 150$</p>
          </div>
          <NavLink to="/solo-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>

        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cPregnant} alt="description-price" />
          <p className={s.cardTitle}>PREGNANT</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 200$</p>
          </div>
          <NavLink to="/pregnant-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>

        <div className={s.imgCard}>
          <MdTouchApp className={s.touchIcon} />
          <img src={cWedding} alt="description-price" />
          <p className={s.cardTitle}>WEDDING</p>
          <div className={s.hiddenBcgPrice}>
            <p className={s.cardPrice}>1h / 500$</p>
          </div>
          <NavLink to="/wedding-photos" className={s.linkToPhoto}>
            See Photos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PriceGrid;
