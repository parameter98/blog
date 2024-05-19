import type { article_data } from "./Struct/article_data";

export default function Article({article_title,
  article_category,
  article_date,
  article_username,
  article_description,
  article_thumbnail}: article_data) {
  return(
    <li>{article_title}</li>
  );
}