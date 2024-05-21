"use client";
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import {debounce} from "lodash";
//import * as _ from 'lodash';

export default function Header() {
  const [isMobile,setIsMobile] = useState(false);
  
  //debounce 구현. arrow function을 사용해야지만 작동함. 이 때 Arrowfunction 의 렉시컬 스코핑에 의해 ( 선언될 당시지점에서의 상위 스코프 )상위스코프는 undefined 
  const resizeHandler = debounce(()=>{
      if (window.innerWidth > 1100) {
        setIsMobile(false);
      }
      else {
        setIsMobile(true);
      }
    },200);
  

  useEffect(()=>{
    resizeHandler();
    window.addEventListener('resize',resizeHandler);
    return ()=>{
      window.removeEventListener('resize',resizeHandler);
    }
  },[])


  return (
    <div  id="Header" className={isMobile? "justify-content-center py-10 flex":"justify-content-center px-80 py-10 flex"}>
      <header className="flex flex-1 h-16 items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-950 shadow-lg border border-transparent rounded-full">
        <Searchbar />
      </header>
    </div>
  );
}