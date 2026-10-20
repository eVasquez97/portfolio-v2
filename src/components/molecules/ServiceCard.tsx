"use client";
import { Title } from "../atoms";
import Image from "next/image";
import { useState } from "react";

type Service = {
  service: string;
  description: string;
  benefits: string[];
  logo: string;
};

export default function ServiceCard({
  service,
  description,
  benefits,
  logo,
}: Service) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-container p-4 mb-3 w-full">
      <div className="flex items-center space-x-3 mb-2">
        {logo && !imgError && (
          <Image
            src={logo}
            alt={service}
            width={28}
            height={28}
            className="object-contain flex-shrink-0"
            onError={() => setImgError(true)}
          />
        )}
        <Title
          text={service}
          size="base"
          styles="font-semibold text-highlight"
        />
      </div>
      <p className="text-sm opacity-90 mb-3">{description}</p>
      {benefits && benefits.length > 0 && (
        <ul className="space-y-1.5 text-xs opacity-80 border-t app-border pt-2.5">
          {benefits.map((b) => (
            <li key={b} className="flex items-start">
              <span className="text-highlight mr-2 select-none">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
