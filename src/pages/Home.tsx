import { useWindowSize } from "usehooks-ts";
import { asideListData, asideListPopularData } from "../assets/data";
import { AsideList } from "../components/AsideList/AsideList";
import { AllTopics } from "../components/HomeComponents/AllTopics";
import { KnownFacts } from "../components/HomeComponents/KnownFacts";
import { MainTopic } from "../components/HomeComponents/MainTopic";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div className=" flex flex-col gap-6 tablet:gap-[66px]">
      <div className="flex justify-evenly desktopSM:justify-between gap-[12px]">
        <MainTopic className="desktopSM:max-w-[900px] tablet:max-w-[700px]  w-full" />
        {width > 1024 && (
          <AsideList data={asideListData} title="ყველა სიახლე" />
        )}
      </div>

      {width <= 1024 && (
        <div className=" flex flex-col mobile:flex-row justify-between gap-6 mobile:gap-4">
          <AsideList
            className=" mobile:w-[50%]"
            data={asideListData}
            title="ყველა სიახლე"
          />
          <AsideList
            className=" mobile:w-[50%]"
            data={asideListPopularData}
            title="პოპულარული"
          />
        </div>
      )}

      <div className="flex justify-evenly desktopSM:justify-between gap-[12px]">
        <div className="flex flex-col gap-6 talbet:gap-[64px] desktopSM:max-w-[900px] tablet:max-w-[700px]  w-full">
          <KnownFacts />
          <AllTopics />
        </div>

        {width > 1024 && (
          <AsideList data={asideListPopularData} title="პოპულარული" />
        )}
      </div>
    </div>
  );
}
