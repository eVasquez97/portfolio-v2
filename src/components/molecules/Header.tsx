import { ubuntu } from "@/app/fonts";
import { Title } from "../atoms";

export default function Header() {
  return (
    <div className="flex flex-col mb-12 md:mt-6 w-max">
      <div className="typewriter">
        <Title
          text="> Eduardo Vásquez"
          size="3xl"
          styles={`${ubuntu.className} w-max text-left text-3xl`}
        />
      </div>
    </div>
  );
}
