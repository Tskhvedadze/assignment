import { CarouselPrimary } from "../Carousel/CarouselPrimary";

import { carouselData } from "../../assets/data";
import { Tag } from "../Tag/Tag";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type MainTopicProps = {
  className?: string;
};

export function MainTopic({ className }: MainTopicProps) {
  const breakpoints = useMediaQuery();

  return (
    <section
      className={` bg-white px-[12px] pt-[12px] pb-[24px] rounded-[20px] flex flex-col gap-4 ${className}`}
    >
      <CarouselPrimary data={carouselData} />

      <div className=" flex flex-col gap-2">
        <div className=" flex gap-1">
          <Tag>12.08.2023</Tag>
          <Tag>პოლიტიკა</Tag>
        </div>

        <p className=" headline1 text-black_900">
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
          პროექტები დაიწყება
        </p>
        {breakpoints !== "mobile" && (
          <p className=" body-regular text-black_600">
            განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს
            “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
          </p>
        )}
      </div>
    </section>
  );
}
