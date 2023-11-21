import React from 'react';
import s from './Loading.module.scss';

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <div className={s.container}>
        .<span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
