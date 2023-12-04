// import styles from "./Skills.module.css";
import Magic from "./Magic.jsx";
import Weapon from "./Weapon.jsx";
import Equipment from "./Equipment.jsx";
import Item from "./Item.jsx";
import { register } from "swiper/element/bundle";
import { useRef, useEffect } from "react";
register();

export default function Skills() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: "true",
      pagination: "true",
      loop: "true",
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            width: 2.6rem;
            height: 2.6rem;
            margin:0;
            background-color: var(--baseColor);
            color: var(--strongTextColor);
            border-radius: 100%;
            border: 2px solid var(--lineColor);
            top:auto;
            bottom:.1rem;
            z-index: 12;
          }
          .swiper-button-next svg,
          .swiper-button-prev svg{
            width: 2rem;
            height: 2rem;
          }
          .swiper .swiper-pagination-bullets{
            bottom: .2rem;
          }
          .swiper-pagination-bullet{
            width: 2rem;
            height: 2rem;
            background-color: var(--lineColor);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <swiper-container ref={swiperRef} init="false">
      <swiper-slide>
        <Magic />
      </swiper-slide>
      <swiper-slide>
        <Weapon />
      </swiper-slide>
      <swiper-slide>
        <Equipment />
      </swiper-slide>
      <swiper-slide>
        <Item />
      </swiper-slide>
    </swiper-container>
  );
}
