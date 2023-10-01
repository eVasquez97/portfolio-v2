"use client";
import { tenor } from "@/app/fonts";
import {
  firstOrder,
  galacticEmpire,
  jediOrder,
  mandalorian,
  variableText,
} from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { Title } from "../atoms";
import Icon from "../atoms/Icon";

export default function Header() {
  const icons = [jediOrder, mandalorian, galacticEmpire, firstOrder];
  const [icon, setIcon] = useState(icons[0]);

  function changeIcon() {
    let newIcon = icon;
    while (newIcon === icon) {
      newIcon = icons[Math.floor(Math.random() * icons.length)];
    }
    setIcon(newIcon);
  }

  return (
    <Link
      href="/"
      className="flex mt-11 mb-5 w-max self-center"
      onClick={() => changeIcon()}
    >
      <p className={`${variableText}`}>
        <Icon
          icon={icon}
          fill="currentColor"
          styles="w-8 h-8 mr-2"
          stroke="none"
          viewBox={icon === icons[2] ? "0 0 50 50" : "0 0 32 32"}
        />
      </p>
      <Title
        text="EDUARDO VÁSQUEZ"
        size="2xl"
        styles={`${tenor.className} w-max text-2xl`}
      />
    </Link>
  );
}
