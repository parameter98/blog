import Header from "./Header";
import Articles from "./Articles";
import "./TestDummy/DummyDatas";
// homepage 에서 필요한 articles 구조체 http로 가져와서 articles 배열을 각각 생성하도록.

export default function Homepage() {

  return (
    <div className="">
      <Header />
      <Articles articles_title="자취 필수 아이템" />
      <Articles articles_title="실험방 필수 구비용품"/>
    </div>
  );
}