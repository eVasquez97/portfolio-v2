import { roboto } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="p-5 mt-6 mb-5 w-full inset-x-0 bottom-0 min-w-full text-center">
      <p
        className={`${roboto.className} text-lg text-secondary-dark dark:text-secondary-light`}
      >
        Eduardo Vásquez | Sept. 2023
      </p>
    </footer>
  );
}
