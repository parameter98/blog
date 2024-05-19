import classes from "./Styles/Articles.module.css";
import Article from "./Article";
import type { articles_data } from "./Struct/articles_data";
import { article_data } from './Struct/article_data';


export default function Articles({
  articles_title,
  articles_list
}: articles_data) 
{ 
  
  // articles_list를 통해서 Article 컴포넌트를 찍어내는 함수 만들것.
  
  return (
    <>
    <p>{articles_title}</p>
    <div>
      <ul className={classes.articlesAlign+""+"whitespace-nowrap overflow-x-auto flex"}>
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
