import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";
import Link from "next/link";
import { variableText } from "@/utils/constants";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex min-w-full mb-11 mx-auto">
      <div className="flex flex-row w-full items-center">
        <Image
          src="/profile.jpg"
          alt="Eduardo"
          width={1000}
          height={1000}
          className="w-16 h-16 transition duration-300 ease-in-out hover:scale-105 mr-5 rounded-full"
        />
        <div>
          <p className={`${variableText} -mb-1 font-medium`}>Hi, I&apos;m</p>
          <div className="typewriter">
            <Link href="/">
              <Title
                text="Eduardo Vásquez"
                size="2xl"
                styles={`${ubuntu.className} w-max text-left text-2xl`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
