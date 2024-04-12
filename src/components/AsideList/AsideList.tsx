import { ListItem } from "./ListItem";

export type ListDataT = {
  id?: number;
  time?: string;
  date?: string;
  image?: string;
  description: string;
};

type AsideListProps = {
  title: string;
  data: ListDataT[];
};

export function AsideList({ title, data }: AsideListProps) {
  return (
    <aside className=" py-4 pr-2 pl-4 rounded-[20px] bg-white max-w-full mobile:max-w-[448px] tablet:max-w-[304px]">
      <h1 className=" mb-[24px]">{title}</h1>

      <div className="h-[618px] scrollbar">
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
