import { AsideListProps } from "../../types";

import { ListItem } from "./ListItem";

export function AsideList({ title, data, className }: AsideListProps) {
  return (
    <aside
      className={` h-fit py-4 pr-2 pl-4 rounded-[20px] bg-white max-w-full mobile:max-w-[448px] tablet:max-w-[304px] ${className}`}
    >
      <h1 className="headline2-caps mb-[24px]">{title}</h1>

      <div className="scrollbar h-[330px] tablet:h-[560px]">
        {data.map(({ date, time, description, image, id }, index) => (
          <ListItem
            key={id}
            image={image}
            date={date}
            time={time}
            description={description}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </aside>
  );
}
