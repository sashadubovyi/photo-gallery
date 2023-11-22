import React from 'react';
import s from './Hero.module.scss';
import meImg from '../../images/photographer-removebg.png';

const Hero = () => {
  return (
    <>
      <div className={s.container}>
        <img src={meImg} alt="me" className={s.meImg} />
        <div className={s.textContainer}>
          <p className={s.textMe}>I'M</p>
          <p className={s.textMe}>KYIV</p>
          <p className={s.textMe}>PHOTOGRAPHER</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
