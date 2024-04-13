import { asideListData, asideListPopularData } from "../assets/data";
import { AsideList } from "../components/AsideList/AsideList";
import { AllTopics } from "../components/HomeComponents/AllTopics";
import { MainTopic } from "../components/HomeComponents/MainTopic";

export default function Home() {
  return (
    <div>
      <MainTopic />
      <AsideList data={asideListData} title="ყველა სიახლე" />
      <AsideList data={asideListPopularData} title="პოპულარული" />
      <AllTopics />
    </div>
  );
}
