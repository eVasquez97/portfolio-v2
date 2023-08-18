import Image from "next/image";

type MediaButton = {
  name: string;
  url: string;
  icon: string;
};

export default function SocialButton({ name, url, icon }: MediaButton) {
  return (
    <a
      href={url}
      target="_blank"
      aria-label={name}
      className="m-2 p-1 object-contain hover:scale-105 bg-secondary-light dark:bg-secondary-dark shadow-sm rounded-full"
    >
      <Image src={icon} alt={name} width={20} height={20} />
    </a>
  );
}
