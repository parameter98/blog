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
      <button>
        <Image 
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={120}
          priority
        />
        <p>{article_title}</p>
      </button>
    </div>
  );
}