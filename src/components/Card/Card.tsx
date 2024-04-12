import { Tag } from "../Tag/Tag";

type CardProps = {
  imgSource: string;
  uploadTime?: string;
  about?: string;
  text: string;
  truncate?: string;
  withoutTags?: boolean;
  className?: string;
};

export function Card({
  imgSource,
  about,
  text,
  uploadTime,
  truncate,
  withoutTags,
  className,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-[20px] px-2 pt-2 pb-4 flex flex-col gap-2  w-full ${className}`}
    >
      <img
        className="rounded-[20px] mobile:max-h-[280px] tablet:max-h-none object-cover"
        src={imgSource}
        alt={about}
      />
      {withoutTags ? null : (
        <div className="flex gap-1">
          <Tag>{uploadTime}</Tag>
          <Tag>{about}</Tag>
        </div>
      )}
      <p className={`${truncate === "false" ? "truncate" : ""}`}>{text}</p>
    </div>
  );
}
