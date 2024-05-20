import Header from "./Header";
import Articles from "./Articles";
import {dummyarray1} from"./TestDummy/DummyDatas"; 

// homepage 에서 필요한 articles 구조체 http로 가져와서 articles 배열을 각각 생성하도록.

export default function Homepage() {

  return (
    <div id="Homepage" className="px-10">
      <Header />
      {dummyarray1.map((elem)=>(
        <Articles 
          articles_title={elem.articles_title}
          articles_list={elem.articles_list}
        />
      ))}
    </div>
  );
}