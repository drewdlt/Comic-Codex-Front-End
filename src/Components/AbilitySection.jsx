import { Swiper, SwiperSlide } from "swiper/react";
import AbilityDescription from "./AbilityDescription";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { useEffect } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

function AbilitySection({ displayName, images, abilities }) {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} ability-bullet bg-black/90">${abilities[index].name}</span>`;
    },
  };

  return (
    <div className="ability-container relative tracking-wider">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[EffectFade, Pagination, Navigation]}
        pagination={pagination}
        loop={true}
        // effect="fade"
      >
        {images.map((imgUrl, index) => {
          return (
            <SwiperSlide>
              <AbilityDescription
                key={index}
                index={index + 1}
                image={imgUrl}
                ability={abilities[index]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default AbilitySection;
