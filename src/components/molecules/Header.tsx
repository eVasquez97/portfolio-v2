import { variableText } from "@/utils/constants";
import { MandoSticker, Title } from "../atoms";

export default function Header() {
  return (
    <div className="flex mt-4 mb-10 w-max items-center">
      <>
        <MandoSticker />
        <p
          className={` ${variableText}font-normal w-max text-2xl opacity-95 ml-2`}
        >
          This is the way
        </p>
      </>
    </div>
  );
}
