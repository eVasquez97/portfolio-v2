import { Title } from "../atoms";

export default function Header() {
  return (
    <div className="flex flex-col my-10 w-max">
      <div className="typewriter">
        <Title
          text="Eduardo Vásquez"
          size="xl"
          styles="font-semibold w-max text-xl"
        />
      </div>
    </div>
  );
}
