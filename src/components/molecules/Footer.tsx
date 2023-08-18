import { roboto } from "@/app/fonts";
import data from "../../utils/data.json";
import SocialButton from "./SocialButton";

export default function Footer() {
  const { socialMedia } = data;
  return (
    <footer className="p-5 mt-3 w-full inset-x-0 bottom-0 min-w-full text-center">
      <div className="flex flex-row w-full mx-auto items-center justify-center mb-2">
        {socialMedia.map((sm) => {
          return (
            <SocialButton
              key={sm.name}
              icon={sm.icon}
              name={sm.name}
              url={sm.url}
            />
          );
        })}
      </div>
      <p
        className={`${roboto.className} text-sm opacity-60 text-secondary-dark dark:text-secondary-light`}
      >
        Eduardo Vásquez | 2023
      </p>
    </footer>
  );
}
