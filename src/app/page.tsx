import Image from "next/image";
import data from "../utils/data.json";

export default function Home() {
  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark p-5 md:w-2/3 mb-4">
      <Image
        alt="Eduardo"
        src="/profile2.png"
        width={300}
        height={300}
        className="self-center p-2 mb-4 rounded-full"
      />
      <p className="dark:text-text-dark text-text-light opacity-75 text-sm text-justify mb-10">
        {data?.cover}
      </p>
    </div>
  );
}
