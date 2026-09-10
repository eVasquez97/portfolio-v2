import { ShowCase } from "@/components/molecules";
import { variableText } from "@/utils/constants";

export default function About() {
  const images = [
    "/perfil.JPG",
    "/img/banner1.jpg",
    "/img/gallery/random.jpg",
    "/img/gallery/hobby2.jpg",
    "/img/gallery/random3.jpg",
  ];

  return (
    <div className="flex flex-col w-full">
      <ShowCase items={images} />

      <p className={`${variableText} my-4`}>
        On my free time I enjoy programming, reading, exercising, and cooking -
        fried chicken is my specialty. I&apos;ve also been volunteering as an{" "}
        <span className="font-normal">interpreter</span> for medical and
        construction teams from the{" "}
        <span className="font-normal">Episcopal Church</span> in United States
        that come annually to Honduras to help. I&apos;ve been doing this
        volunteer work since 2007.
      </p>
    </div>
  );
}
