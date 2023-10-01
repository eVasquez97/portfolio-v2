import React from "react";
import { IconType } from "./atomTypes";

export default function Icon({
  icon,
  styles,
  fill,
  stroke,
  color,
  viewBox,
}: IconType) {
  return (
    <svg
      viewBox={viewBox || "0 0 24 24"}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke={stroke || color || "currentColor"}
      className={styles}
    >
      <path d={icon} />
    </svg>
  );
}
