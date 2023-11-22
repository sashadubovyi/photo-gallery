import React from 'react';
import s from './Hero.module.scss';
import meImg from '../../images/photographer-removebg.png';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
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
    </>
  );
};

export default Hero;
