import { variableText } from "@/utils/constants";
import Link from "next/link";

export default function ContactMe() {
  return (
    <Link
      href="mailto:ed100blade@hotmail.com?&subject=Mail from Portfolio"
      className={`${variableText} mt-3 text-lg absolute top-0 right-0 mr-4 mb-5`}
    >
      <p className="mb-4 flex items-center justify-center md:justify-start text-lg hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        Contact Me
      </p>
    </Link>
  );
}