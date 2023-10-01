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
  enum soundTrack {
    jediOrder = "/jedi.mp3",
    mandalorian = "/mandalorian.mp3",
    galacticEmpire = "/sith.mp3",
    firstOrder = "/sith.mp3",
  }

  const icons = [jediOrder, mandalorian, galacticEmpire, firstOrder];
  const [icon, setIcon] = useState(icons[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  function playAudio() {
    const keys = Object.keys(soundTrack);
    const randomKey = keys[Math.floor(Math.random() * 3)];
    setIcon(icons[keys.indexOf(randomKey)]);
    const newAudio = new Audio(
      soundTrack[randomKey as keyof typeof soundTrack]
    );
    newAudio.volume = 0.02;

    if (!isPlaying) {
      newAudio.play();
      setIsPlaying(true);
      setAudio(newAudio);

      newAudio.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
  }

  function pauseAudio() {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <Link
      href="/"
      className="flex mt-11 mb-5 w-max self-center"
      onClick={() => playAudio()}
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
        styles={`${tenor.className} w-max text-2xl hover:underline`}
      />
    </Link>
  );
}
