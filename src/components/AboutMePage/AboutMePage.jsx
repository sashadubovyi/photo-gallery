import React from 'react';
import s from './AboutMePage.module.scss';
import {
  PiTelegramLogoThin,
  PiInstagramLogoThin,
  PiPhoneThin,
} from 'react-icons/pi';

const AboutMePage = () => {
  return (
    <div className={s.section}>
      <h1 className={s.mainTitle}>ABOUT ME</h1>
      <div className={s.container}>
        <div className={s.textBox}>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit a deleniti, aut quia molestias placeat ad illum
            corrupti fugiat et blanditiis, natus hic alias beatae facere
            architecto. Iusto, incidunt! Nobis delectus obcaecati saepe, dolorum
            non doloribus porro ab dolor odit molestiae reprehenderit voluptate
            laudantium maiores modi a animi eveniet temporibus quis quasi ipsam
            officiis! Soluta ipsam quisquam quibusdam non.
          </p>
          <div className={s.contactsBox}>
            <a className={s.contact} href="tel:+380935910908">
              <PiPhoneThin className={s.contactIcon} />
            </a>

            <a
              className={s.contact}
              href="https://t.me/Yanadubovaya"
              target="_blanc"
            >
              <PiTelegramLogoThin className={s.contactIcon} />
            </a>

            <a
              className={s.contact}
              href="https://www.instagram.com/yanadubovaya.ph/"
              target="_blanc"
            >
              <PiInstagramLogoThin className={s.contactIcon} />
            </a>
          </div>
        </div>

        <div className={s.img}></div>
      </div>
    </div>
  );
};

export default AboutMePage;
