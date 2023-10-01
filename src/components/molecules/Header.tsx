import Link from "next/link";
import { MandoSticker, Title } from "../atoms";

export default function Header() {
  return (
    <Link href="/" className="flex my-11 w-max items-center">
      <>
        <MandoSticker />
        <Title
          text="Eduardo Vásquez"
          size="2xl"
          styles="font-semibold w-max text-2xl opacity-95 hover:opacity-100 transition-opacity ml-2"
        />
      </>
    </Link>
  );
}
