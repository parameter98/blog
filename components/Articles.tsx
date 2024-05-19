"use client";
import classes from "./Styles/Articles.module.css";
import Article from "./Article";
import type { articles_data } from "./Struct/articles_data";
import useHorizontalScroll from "./library/useSideScroll";



export default function Articles({
  articles_title,
  articles_list
}: articles_data) 
{ 
  
  return (
    <>
    <p>{articles_title}</p>
    <div >
      <ul ref={useHorizontalScroll()} className={classes.articlesAlign+""+"whitespace-nowrap overflow-x-scroll scrollbar-hide flex snap-x"}>
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
    </>
  );
}
