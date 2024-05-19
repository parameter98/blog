import classes from "./Styles/Articles.module.css";
import Article from "./Article";
import type { articles_data } from "./Struct/articles_data";

// articles_list를 통해서 Article 컴포넌트를 찍어내는 함수 만들것.

export default function Articles({
  articles_title,
  articles_list
}: articles_data) 
{ 
  function ArticleGenerator(data: articles_data) {
    data.articles_list.map();
    
  }

  return (
    <>
    <p>{articles_title}</p>
    <div>
      <ul className={classes.articlesAlign}>
        
      </ul>
    </div>
    </>
  );
}
