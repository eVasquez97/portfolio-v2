"use client";
import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const titles = [
    "Software Engineer",
    "Mobile developer",
    "Full-stack developer",
  ];
  const [current, setCurrent] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * titles.length);
    setCurrent(titles[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="flex bg-primary-light dark:bg-primary-dark min-w-full mt-6 items-center text-center mx-auto">
      <div className="flex flex-col p-2 pl-4 text-center w-full mx-auto items-center">
        <div className="typewriter">
          <Link href="/">
            <Title
              text="Eduardo Vásquez"
              size="5xl"
              styles={`${ubuntu.className} w-max text-5xl`}
            />
          </Link>
        </div>
        <Title text={current} size="lg" styles=" mb-3" />
      </div>
    </div>
  );
}
