type ListDataT = {
  id?: number;
  time?: string;
  date?: string;
  image?: string;
  description: string;
};

type AsideListProps = {
  title: string;
  className?: string;
  data: ListDataT[];
};

type ListItemProps = { isLast: boolean } & ListDataT;

export type { ListDataT, AsideListProps, ListItemProps };
