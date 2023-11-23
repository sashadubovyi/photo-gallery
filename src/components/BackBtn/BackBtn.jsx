import React from 'react';
import s from './BackBtn.module.scss';
import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';

const BackBtn = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.mainBtn}>
        <NavLink className={s.backBtn} to="/">
          <IoArrowBackSharp />
        </NavLink>
      </div>
    </div>
  );
};

export default BackBtn;
