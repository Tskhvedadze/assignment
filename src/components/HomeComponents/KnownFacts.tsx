import { useRef } from "react";
import { ButtonSecondary } from "../Buttons/ButtonSecondary";
import { Card } from "../Card";

import { knownFactsData } from "../../assets/data";
import { HomeComponentsProps } from "../../types";

import RightArrow from "../../assets/svg/RightArrow.svg?react";
import LeftArrow from "../../assets/svg/LeftArrow.svg?react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function KnownFacts({ className }: HomeComponentsProps) {
  const swiperRef = useRef<SwiperRef>(null);

  const slideNext = (): void => swiperRef?.current?.swiper.slideNext();
  const slidePrev = (): void => swiperRef?.current?.swiper.slidePrev();

  return (
    <section
      className={`flex flex-col gap-[20px] px-[35px] py-[24px] bg-white rounded-[16px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <h1 className=" body-uppercase">ცნობილი ფაქტები</h1>

        <div className=" flex gap-4 items-center">
          <ButtonSecondary onClick={slidePrev}>
            <LeftArrow />
          </ButtonSecondary>
          <ButtonSecondary onClick={slideNext}>
            <RightArrow />
          </ButtonSecondary>
        </div>
      </div>

      <div className=" h-[206px] w-full">
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          className=" h-full w-full"
          loop={true}
        >
          {knownFactsData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="max-w-[288px] mobile:max-w-[400px] "
            >
              <Card
                className=" bg-primary_light"
                truncate={false}
                imgSource={data.image}
                text={data.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
