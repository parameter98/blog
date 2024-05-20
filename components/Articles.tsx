"use client";
import classes from "./Styles/Articles.module.css";
import Article from "./Article";
import type { articles_data } from "./Struct/articles_data";
import useHorizontalScroll from "./library/useSideScroll";
import {Divider} from "@nextui-org/divider";

// TODO 여러 사이즈의 Articles를 사용할 수 있도록 Article과 Articles에 변수 핸들링.

export default function Articles({
  articles_title,
  articles_list
}: articles_data) 
{ 
  
  return (
    <div id="Articles" className="px-5 shadow-2xl border border-transparent rounded-2xl">
    <p className="text-2xl py-5">{articles_title}</p>
    <Divider className="my-2 " />
    <div>
      <ul ref={useHorizontalScroll()} className="whitespace-nowrap overflow-x-scroll scrollbar-hide flex">
        {articles_list.map((elem)=>(
          <Article 
          article_category={elem.article_category}
          article_date={elem.article_date}
          article_description={elem.article_description}
          article_thumbnail={elem.article_thumbnail}
          article_title={elem.article_title}
          article_username={elem.article_username}
          />
        ))}
      </ul>
    </div>
    </div>
  );
}
