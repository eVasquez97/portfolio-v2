import { ubuntu } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="p-5 mt-3 w-full inset-x-0 bottom-0 min-w-full text-center">
      <p
        className={`${ubuntu.className} text-sm opacity-60 text-secondary-dark dark:text-secondary-light`}
      >
        Eduardo Vásquez | 2023
      </p>
    </footer>
  );
}
