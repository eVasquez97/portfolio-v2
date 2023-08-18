import Image from "next/image";
import data from "../utils/projects.json";
import { ubuntu } from "./fonts";

export default function Home() {
  function mockProject(item: { name: any; platform?: string }) {
    return (
      <div className="relative float-left -mr-[100%] w-full shadow-md max-w-64 max-h-32 space-x-4 hover:scale-105 duration-300">
        <Image
          src="/img/banner1.jpg"
          className="object-cover h-full w-full"
          alt="..."
          width={100}
          height={100}
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center block bg-secondary-light dark:bg-secondary-dark opacity-90">
          <p
            className={`${ubuntu.className} text-text-light dark:text-text-dark`}
          >
            {item.name}
          </p>
          <span className="text-xs opacity-60">{item.platform}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark p-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((pro) => {
          return mockProject(pro);
        })}
      </div>
    </div>
  );
}
