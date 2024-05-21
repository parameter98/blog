"use client";
import { Button } from "@nextui-org/button";
import type { article_data } from "./Struct/article_data";
import {Image} from "@nextui-org/image";
import {DateInput} from "@nextui-org/date-input";
import { CalendarDate,parseDate } from './../node_modules/@internationalized/date';
import {Spacer} from "@nextui-org/spacer";


export default function Article({article_title,
  article_category,
  article_date,
  article_username,
  article_description,
  article_thumbnail}: article_data) {

    //TODO Image 컴포넌트의 src 부분을 데이터로부터 가져오는 것으로 변경해야함.
  return(
    <div id="Article" className="grid place-content-center drop-shadow-2xl">
      <Button className="grid justify-items-center border border-transparent rounded-2xl" style={{width:600, height: 350}}>
        <Image 
          isZoomed
          isBlurred
          className="dark:invert justify-items-center"
          src={Math.random()>0.5? "/image.png":"/vercel.svg"}
          alt="Next.js Logo"
          width={450}
          height={300}
          style={{minHeight: 180, maxHeight:200, objectFit:'cover'}}
        />
        <Spacer y={2}/>
        <p className="text-xl pt-5">{article_title}</p>
        <div className="flex">
          <Spacer x={96}/>
          <DateInput
          className="italic p-3" 
          id="Date"
          isDisabled
          defaultValue={parseDate(article_date)}
          placeholderValue={new CalendarDate(1995, 11, 6)}
          />
        </div>
      </Button>
    </div>
  );
}