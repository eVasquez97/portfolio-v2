import { lora } from "@/app/fonts";
import Link from "next/link";
import { Title } from "../atoms";

export default function Header() {
  // function changeIcon() {
  //   let newIcon = icon;
  //   while (newIcon === icon) {
  //     newIcon = icons[Math.floor(Math.random() * icons.length)];
  //   }
  //   setIcon(newIcon);
  // }

  return (
    <Link href="/" className="flex my-11 w-max">
      <Title
        text="Eduardo Vásquez 👋🏻"
        size="2xl"
        styles={`${lora.className} font-semibold w-max text-2xl opacity-80 hover:opacity-100 transition-opacity`}
      />
    </Link>
  );
}
