import { Button } from "@nextui-org/button";
import type { article_data } from "./Struct/article_data";
import {Image} from "@nextui-org/image";


export default function Article({article_title,
  article_category,
  article_date,
  article_username,
  article_description,
  article_thumbnail}: article_data) {
  return(
    <div id="Article" className="grid place-content-center drop-shadow-2xl">
      <Button className="grid place-content-center border border-transparent rounded-2xl" style={{width:500, height: 300}}>
        <Image 
          isZoomed
          isBlurred
          className="dark:invert"
          src={Math.random()>0.5? "/image.png":"/vercel.svg"}
          alt="Next.js Logo"
          width={450}
          height={300}
          style={{minHeight: 180, maxHeight:200, objectFit:'cover'}}
        />
        <p className="text-xl">{article_title}</p>
      </Button>
    </div>
  );
}