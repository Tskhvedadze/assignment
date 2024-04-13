import { ListDataT } from "./AsideList";

import Clock from "../../assets/svg/clock.svg?react";

type ListItemProps = { isLast: boolean } & ListDataT;

export function ListItem({
  time,
  date,
  description,
  image,
  isLast,
}: ListItemProps) {
  if (image) {
    return (
      <div>
        <div className="flex gap-2">
          <img src={image} alt="news" className="max-w-[96px] w-full h-full" />
          <p className="headline3-small">{description}</p>
        </div>
        {!isLast && <div className="dashed_border my-4" />}
      </div>
    );
  }

  return (
    <div className="flex gap-2 flex-col">
      <span className="small-text text-primary_blue flex items-center gap-2">
        <Clock /> {time} &#x2022; {date}
      </span>

      <p className="headline3-small">{description}</p>
      {!isLast && <div className="dashed_border my-4" />}
    </div>
  );
}
