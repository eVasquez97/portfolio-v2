import { ShowCase } from "@/components/molecules";
import { variableText } from "@/utils/constants";

export default function About() {
  const images = [
    "/img/gallery/hobby1.jpg",
    "/img/gallery/random2.jpg",
    "/img/gallery/grad.jpg",
  ];

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full">
      <div className="flex flex-col w-full">
        <p className={`${variableText} mb-11 `}>
          I&apos;m a <span className="font-normal">full stack developer</span>{" "}
          from Honduras. I have over five years of experience in creating web
          and mobile applications and enjoy tackling challenging problems and
          delivering quality products that meet the needs of users and clients.
        </p>
        <ShowCase items={images} />
      </div>

      <div className="flex flex-col w-full mb-8"></div>
    </div>
  );
}
