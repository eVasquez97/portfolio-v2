import { adamia } from "@/app/fonts";
import { Title } from "../atoms";

export default function Header() {
  return (
    <div className="flex my-10 w-max self-center">
      <div className="typewriter">
        <Title
          text="EDUARDO VÁSQUEZ"
          size="2xl"
          styles={`${adamia.className} w-max text-2xl`}
        />
      </div>
    </div>
  );
}
