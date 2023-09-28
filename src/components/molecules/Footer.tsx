import SocialButton from "./SocialButton";
import data from "../../utils/data.json";
import { variableText } from "@/utils/constants";

export default function Footer() {
  const { socialMedia } = data;

  const socialButtons = socialMedia.map((sm) => (
    <SocialButton key={sm.name} icon={sm.icon} name={sm.name} url={sm.url} />
  ));

  return (
    <footer className="p-5 mt-11 mb-6 w-full inset-x-0 bottom-0 min-w-full text-center opacity-90">
      <div className="flex flex-row w-full mx-auto items-center justify-center mb-5">
        {socialButtons}
      </div>
      <p className={`${variableText} `}>Eduardo Vásquez | Sept. 2023</p>
    </footer>
  );
}
