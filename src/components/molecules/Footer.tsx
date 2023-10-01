import { variableText } from "@/utils/constants";
import Link from "next/link";
import data from "../../utils/data.json";
import SocialButton from "./SocialButton";

export default function Footer() {
  const { socialMedia } = data;

  const socialButtons = socialMedia.map((sm) => (
    <SocialButton
      key={sm.name}
      icon={sm.icon}
      name={sm.name}
      url={sm.url}
      viewBox={sm.name === "Twitter" ? "0 0 50 50" : ""}
    />
  ));

  return (
    <footer className="my-12 w-full inset-x-0 bottom-0 flex flex-row justify-between items-center opacity-60 border-t border-t-secondaryText-light dark:border-t-secondaryText-dark pt-3">
      <Link href="/" className={`${variableText} w-full text-left`}>
        Eduardo Vásquez
      </Link>
      <div className="flex flex-row">{socialButtons}</div>
    </footer>
  );
}
