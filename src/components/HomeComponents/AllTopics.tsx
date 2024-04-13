import { allNewsData } from "../../assets/data";
import { Card } from "../Card/Card";

export function AllTopics() {
  return (
    <section className="grid justify-items-center grid-cols-1 gap-6 desktopSM:gap-x-8 tablet:gap-y-5 tablet:gap-x-6 tablet:grid-cols-3 mobile:grid-cols-2 mobile:gap-y-6 mobile:gap-x-8">
      {allNewsData.map((data) => (
        <Card
          key={data.id}
          about={data.about}
          imgSource={data.image}
          text={data.text}
          uploadTime={data.uploadTime}
          truncate={data.isMiddle}
          className={
            data.isMiddle === "true"
              ? " col-start-1 col-end-1 row-start-1 row-end-2 tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 mobile:col-start-1 mobile:col-end-3 mobile:row-start-1 mobile:row-end-2 max-w-full "
              : ""
          }
        />
      ))}
    </section>
  );
}
