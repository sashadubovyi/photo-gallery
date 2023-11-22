import React from 'react';
import s from './Hero.module.scss';
import meImg from '../../images/photographer-removebg.png';
import { PiInstagramLogoThin } from 'react-icons/pi';

const Hero = () => {
  return (
    <>
      <div className={s.container}>
        <img src={meImg} alt="me" className={s.meImg} />
        <div className={s.textContainer}>
          <p className={s.textMe}>MY NAME</p>
          <p className={s.textMe}>YANA DUBOVAYA</p>
          <p className={s.textMe}>I'M PHOTOGRAPHER</p>
          <p className={s.textMe}>FROM KYIV</p>
          <a
            className={s.textMe}
            href="https://www.instagram.com/yanadubovaya.ph/"
            target="_blanc"
          >
            <PiInstagramLogoThin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
