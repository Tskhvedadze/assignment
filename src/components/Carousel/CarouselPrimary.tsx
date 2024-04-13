import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

type CarouselPrimaryProps = {
  data: { id: number; image: string }[];
};

export function CarouselPrimary({ data }: CarouselPrimaryProps) {
  const pagination = {
    clickable: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderBullet: function (_: any, className: string) {
      return '<span class="' + className + '"> </span>';
    },
  };

  return (
    <div className="h-[406px]">
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="swiper-primary w-full h-full rounded-[20px]"
      >
        {data.map((data) => (
          <SwiperSlide key={data.id} className="flex relative w-full h-full">
            <img
              src={data.image}
              alt="milkyway"
              className="absolute object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
