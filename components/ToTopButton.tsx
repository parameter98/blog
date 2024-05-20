"use client";
import { Button } from "@nextui-org/button";
import MenuIcon from './MenuIcon';

export default function ToTopButton() {
  

  function onClicked(){
    window.scrollTo({top:0,behavior:'smooth'});
  }
  return(
    <Button onClick={onClicked} id="ToTopButton" isIconOnly color="warning" className="m-5 fixed bottom-4 right-4 border border-transparent rounded-full">
      <MenuIcon />
    </Button>
  );
}