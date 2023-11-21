import React from "react";
import s from "./Gallery.module.scss";
import family from "../../images/test/family.jpg";
import solo from "../../images/test/solo.jpg";
import wedding from "../../images/test/wedding.jpg";
import { NavLink } from "react-router-dom";
import { animated, useInView } from "@react-spring/web";

const Gallery = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  const [ref2, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  const [ref4, springs4] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  return (
    <>
      <div className={s.navigationBox}>
        <animated.div className={s.box} ref={ref} style={springs}>
          <NavLink to="/all-photos" className={s.seeMoreBtn}>
            <p>See more</p>
          </NavLink>
          <div className={s.imgBox}>
            <img className={s.img} src={family} alt="photo" />
          </div>
          <div className={s.textBox}>
            <p className={s.title}>All photos</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              dolore et ratione. Ut, vel. Magnam esse molestias fugit tempora
              molestiae harum, non totam tenetur itaque soluta eaque qui
              veritatis corporis. Impedit voluptatum tenetur cum explicabo
              aliquid praesentium amet quo voluptatem. Temporibus ipsam sint
              sapiente minus. Excepturi totam fugiat omnis impedit deserunt ea
              optio quo deleniti, necessitatibus perferendis eos tempora minus?
              Sed voluptate earum eum obcaecati odit numquam modi autem
              veritatis. Voluptate obcaecati pariatur distinctio error? Quis
              minus, repellat fugiat unde numquam libero? Iure labore voluptate
              qui eius pariatur! Quos, aliquid.
            </p>
          </div>
        </animated.div>

        <animated.div className={s.box} ref={ref1} style={springs1}>
          <NavLink to="/wedding-photos" className={s.seeMoreBtn}>
            <p>See more</p>
          </NavLink>
          <div className={s.imgBox}>
            <img className={s.img} src={wedding} alt="photo" />
          </div>
          <div className={s.textBox}>
            <p className={s.title}>Weddings</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              dolore et ratione. Ut, vel. Magnam esse molestias fugit tempora
              molestiae harum, non totam tenetur itaque soluta eaque qui
              veritatis corporis. Impedit voluptatum tenetur cum explicabo
              aliquid praesentium amet quo voluptatem. Temporibus ipsam sint
              sapiente minus. Excepturi totam fugiat omnis impedit deserunt ea
              optio quo deleniti, necessitatibus perferendis eos tempora minus?
              Sed voluptate earum eum obcaecati odit numquam modi autem
              veritatis. Voluptate obcaecati pariatur distinctio error? Quis
              minus, repellat fugiat unde numquam libero? Iure labore voluptate
              qui eius pariatur! Quos, aliquid.
            </p>
          </div>
        </animated.div>

        <animated.div className={s.box} ref={ref2} style={springs2}>
          <NavLink to="/family-photos" className={s.seeMoreBtn}>
            <p>See more</p>
          </NavLink>
          <div className={s.imgBox}>
            <img className={s.img} src={family} alt="photo" />
          </div>
          <div className={s.textBox}>
            <p className={s.title}>Family</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              dolore et ratione. Ut, vel. Magnam esse molestias fugit tempora
              molestiae harum, non totam tenetur itaque soluta eaque qui
              veritatis corporis. Impedit voluptatum tenetur cum explicabo
              aliquid praesentium amet quo voluptatem. Temporibus ipsam sint
              sapiente minus. Excepturi totam fugiat omnis impedit deserunt ea
              optio quo deleniti, necessitatibus perferendis eos tempora minus?
              Sed voluptate earum eum obcaecati odit numquam modi autem
              veritatis. Voluptate obcaecati pariatur distinctio error? Quis
              minus, repellat fugiat unde numquam libero? Iure labore voluptate
              qui eius pariatur! Quos, aliquid.
            </p>
          </div>
        </animated.div>

        <animated.div className={s.box} ref={ref3} style={springs3}>
          <NavLink to="/solo-photos" className={s.seeMoreBtn}>
            <p>See more</p>
          </NavLink>
          <div className={s.imgBox}>
            <img className={s.img} src={solo} alt="photo" />
          </div>
          <div className={s.textBox}>
            <p className={s.title}>Solo</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              dolore et ratione. Ut, vel. Magnam esse molestias fugit tempora
              molestiae harum, non totam tenetur itaque soluta eaque qui
              veritatis corporis. Impedit voluptatum tenetur cum explicabo
              aliquid praesentium amet quo voluptatem. Temporibus ipsam sint
              sapiente minus. Excepturi totam fugiat omnis impedit deserunt ea
              optio quo deleniti, necessitatibus perferendis eos tempora minus?
              Sed voluptate earum eum obcaecati odit numquam modi autem
              veritatis. Voluptate obcaecati pariatur distinctio error? Quis
              minus, repellat fugiat unde numquam libero? Iure labore voluptate
              qui eius pariatur! Quos, aliquid.
            </p>
          </div>
        </animated.div>

        <animated.div className={s.box} ref={ref4} style={springs4}>
          <NavLink to="/solo-photos" className={s.seeMoreBtn}>
            <p>See more</p>
          </NavLink>
          <div className={s.imgBox}>
            <img className={s.img} src={solo} alt="photo" />
          </div>
          <div className={s.textBox}>
            <p className={s.title}>Kids</p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              dolore et ratione. Ut, vel. Magnam esse molestias fugit tempora
              molestiae harum, non totam tenetur itaque soluta eaque qui
              veritatis corporis. Impedit voluptatum tenetur cum explicabo
              aliquid praesentium amet quo voluptatem. Temporibus ipsam sint
              sapiente minus. Excepturi totam fugiat omnis impedit deserunt ea
              optio quo deleniti, necessitatibus perferendis eos tempora minus?
              Sed voluptate earum eum obcaecati odit numquam modi autem
              veritatis. Voluptate obcaecati pariatur distinctio error? Quis
              minus, repellat fugiat unde numquam libero? Iure labore voluptate
              qui eius pariatur! Quos, aliquid.
            </p>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Gallery;
