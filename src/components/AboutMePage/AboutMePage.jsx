import React from 'react';
import s from './AboutMePage.module.scss';
import meImg from '../../images/photographer-removebg.png';
import { useSpring, animated, useInView } from '@react-spring/web';

export const AboutMePage = () => {
  const imgSprings = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 700 },
  });

  const textSprings3 = useSpring({
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1000 },
  });

  const textSprings2 = useSpring({
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
    config: { duration: 800 },
  });

  const textSprings1 = useSpring({
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
    config: { duration: 600 },
  });

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-20% 0%',
    }
  );

  return (
    <>
      <div className={s.container}>
        <animated.img
          src={meImg}
          alt="me"
          className={s.meImg}
          style={{ ...imgSprings }}
        />
        <div className={s.textContainer}>
          <animated.p className={s.textMe} style={{ ...textSprings3 }}>
            I'M
          </animated.p>
          <animated.p className={s.textMe} style={{ ...textSprings2 }}>
            KYIV
          </animated.p>
          <animated.p className={s.textMe} style={{ ...textSprings1 }}>
            PHOTOGRAPHER
          </animated.p>
        </div>
      </div>

      <div className={s.aboutMeContainer}>
        <animated.p ref={ref} style={springs}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minus
          laboriosam voluptatem nesciunt temporibus quod qui saepe a, soluta
          obcaecati quia cumque! Ullam tenetur exercitationem, obcaecati vel
          assumenda sunt suscipit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere, minus laboriosam voluptatem nesciunt
          temporibus quod qui saepe a, soluta obcaecati quia cumque! Ullam
          tenetur exercitationem, obcaecati vel assumenda sunt suscipit? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facere, minus
          laboriosam voluptatem nesciunt temporibus quod qui saepe a, soluta
          obcaecati quia cumque! Ullam tenetur exercitationem, obcaecati vel
          assumenda sunt suscipit?
        </animated.p>

        <div className={s.priceBox}>
          <span className={s.leftSpan}></span>
          <div className={s.priceRow}>
            <p className={s.priceTitle}> Solo photo</p>
            <p className={s.price}>100$ / h</p>
          </div>

          <div className={s.priceRow}>
            <p className={s.priceTitle}> Family photo</p>
            <p className={s.price}>150$ / h</p>
          </div>

          <div className={s.priceRow}>
            <p className={s.priceTitle}> Wedings photo</p>
            <p className={s.price}>300$ / h</p>
          </div>
          <span className={s.rightSpan}></span>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
