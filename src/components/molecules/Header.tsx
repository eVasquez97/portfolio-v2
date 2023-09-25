import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";
import Link from "next/link";
import { NavTabs } from ".";

export default function Header() {
  return (
    <div className="flex flex-col mb-12 mt-4 md:mt-16 w-max">
      <NavTabs />
      <Link href="/">
        <div className="typewriter">
          <Title
            text="> Eduardo Vásquez"
            size="3xl"
            styles={`${ubuntu.className} w-max text-left text-3xl`}
          />
        </div>
      </Link>
    </div>
  );
}
