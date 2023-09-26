import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";

export default function Header() {
  return (
    <div className="flex flex-col mb-12 md:mt-6 w-max">
      <div className="typewriter">
        <Title
          text="> Eduardo Vásquez"
          size="2xl"
          styles={`${ubuntu.className} w-max text-left text-2xl`}
        />
      </div>
    </div>
  );
}
