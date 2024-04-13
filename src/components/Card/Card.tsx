import { Tag } from "../Tag/Tag";

type CardProps = {
  text: string;
  imgSource: string;
  uploadTime?: string;
  about?: string;
  truncate?: boolean;
  withTags?: true;
  className?: string;
  whiteBg?: true;
};

export function Card({
  imgSource,
  about,
  text,
  uploadTime,
  truncate,
  withTags,
  whiteBg,
  className,
}: CardProps) {
  return (
    <div
      className={`${
        whiteBg ? "bg-white" : ""
      } rounded-[20px] px-2 pt-2 pb-4 flex flex-col gap-2  w-full ${className}`}
    >
      <img
        className="rounded-[20px] mobile:max-h-[280px] tablet:max-h-none object-cover"
        src={imgSource}
        alt={about}
      />
      {withTags && (
        <div className="flex gap-1">
          <Tag>{uploadTime}</Tag>
          <Tag>{about}</Tag>
        </div>
      )}
      <p className={`body-medium ${truncate ? "truncate" : ""}`}>{text}</p>
    </div>
  );
}
