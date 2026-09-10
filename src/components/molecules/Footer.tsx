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
    <footer className="my-4 w-full inset-x-0 bottom-0 flex flex-row justify-end items-center opacity-70 border-t border-t-secondaryText-light/30 dark:border-t-secondaryText-dark/30 pt-4">
      <div className="flex flex-row space-x-2">{socialButtons}</div>
    </footer>
  );
}
