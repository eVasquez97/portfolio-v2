import SocialButton from "./SocialButton";
import data from "../../utils/data.json";
import { variableText } from "@/utils/constants";
import { adamia } from "@/app/fonts";

export default function Footer() {
  const { socialMedia } = data;

  const socialButtons = socialMedia.map((sm) => (
    <SocialButton key={sm.name} icon={sm.icon} name={sm.name} url={sm.url} />
  ));

  return (
    <footer className="my-11 pt-4 w-full inset-x-0 bottom-0 opacity-60 flex flex-row justify-between items-center border-t-2 border-t-secondaryText-light dark:border-t-secondaryText-dark">
      <p className={`${variableText} ${adamia.className} w-full text-sm`}>
        Eduardo Vásquez
      </p>
      <div className="flex flex-row mx-auto">{socialButtons}</div>
    </footer>
  );
}
