import { CarouselPrimary } from "../Carousel/CarouselPrimary";

import { carouselData } from "../../assets/data";
import { Tag } from "../Tag/Tag";

export function MainTopic() {
  return (
    <section className=" bg-white px-[12px] pt-[12px] pb-[24px] rounded-[20px] flex flex-col gap-4">
      <CarouselPrimary data={carouselData} />

      <div className=" flex flex-col gap-2">
        <div className=" flex gap-1">
          <Tag>12.08.2023</Tag>
          <Tag>პოლიტიკა</Tag>
        </div>

        <p>
          ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
          პროექტები დაიწყება
        </p>
        <p>
          განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”.
          ობლიგაციის ნომინალი - 1000 USD
        </p>
      </div>
    </section>
  );
}
