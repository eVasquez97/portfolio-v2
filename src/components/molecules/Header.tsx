import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-primary-light dark:bg-primary-dark min-w-full mt-6 items-center text-center mx-auto">
      <div className="flex flex-col p-2 pl-4 text-center w-full mx-auto">
        <Link href="/">
          <Title
            text="Eduardo Vásquez"
            size="2xl"
            styles={`${ubuntu.className} text-5xl`}
          />
        </Link>
        <Title text="lorem ipsum" size="xs" styles="text-highlight" />
      </div>
    </div>
  );
}
