import { register } from "swiper/element/bundle";
register();

export default function MySwiper({ slides, type, life, armor, energy }) {
  const DynamicComponent = type;
  const progress = [life,armor,energy];
  return (
    <>
      <swiper-container loop="true" autoplay-delay="8000" >
        {slides.map((slide, index) => {
          const currentProgress = progress[index]

          return (
            <swiper-slide
              key={index}
              style={{
                "--maxProgress": progress[index],
                "--currentProgress": currentProgress,
              }}
            >
              <DynamicComponent>{slide}</DynamicComponent>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
}
