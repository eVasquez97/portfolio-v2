import { cardo } from "@/app/fonts";

export default function Header() {
  return (
    <div className="flex bg-primary-light dark:bg-primary-dark min-w-full mt-4 border-l-highlight border-l-2">
      <div className="flex flex-col p-2 pl-4">
        <p
          className={`${cardo.className} text-primary-dark dark:text-primary-light text-2xl`}
        >
          Eduardo Vásquez
        </p>
        <span className="text-highlight text-xs">
          Software Developer | Mobile Developer
        </span>
      </div>
    </div>
  );
}
