"use client";
import { useRef, useEffect } from "react";

export default function useHorizontalScroll() {
  const elRef = useRef(null);
  useEffect(() => {
    const el:any = elRef.current;
    if (el) {
      const onWheel = (e:any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}