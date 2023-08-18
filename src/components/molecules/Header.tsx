import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";
import Link from "next/link";

export default function Header() {
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
        <Title text="A ver qué pongo acá" size="lg" styles=" mb-3" />
      </div>
    </div>
  );
}
