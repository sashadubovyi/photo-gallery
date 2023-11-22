import React from 'react';
import s from './RenderPhoto.module.scss';
import { TbZoomInAreaFilled } from 'react-icons/tb';

const RenderPhoto = ({ photoURLs, openModal }) => {
  return (
    <div className={s.container}>
      {photoURLs.map((url, index) => (
        <div className={s.imgBox} key={index} onClick={() => openModal(index)}>
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
  );
};

export default RenderPhoto;
