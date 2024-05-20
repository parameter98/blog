import type { article_data } from "./Struct/article_data";
import Image from 'next/image';


export default function Article({article_title,
  article_category,
  article_date,
  article_username,
  article_description,
  article_thumbnail}: article_data) {
  return(
    <div id="Article" className="grid place-content-center">
      <button className="grid place-content-center" style={{width:500, height: 300}}>
        <Image 
          className="dark:invert"
          src={Math.random()>0.5? "/image.png":"/vercel.svg"}
          alt="Next.js Logo"
          width={200}
          height={180}
          style={{minHeight: 180, maxHeight:200}}
        />
        <p className="text-xl">{article_title}</p>
      </button>
    </div>
  );
}