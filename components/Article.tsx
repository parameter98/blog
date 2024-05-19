import type { article_data } from "./Struct/article_data";
import Image from 'next/image';


export default function Article({article_title,
  article_category,
  article_date,
  article_username,
  article_description,
  article_thumbnail}: article_data) {
  return(
    <div>
      <button style={{width:200, height: 200}}>
        <Image 
          className="dark:invert"
          src={Math.random()>0.5? "/image.png":"/vercel.svg"}
          alt="Next.js Logo"
          width={200}
          height={180}
          style={{maxHeight:200}}
        />
        <p>{article_title}</p>
      </button>
    </div>
  );
}