import projects from "../utils/projects.json";
import { ProjectCard } from "@/components/organisms";
import { variableBg, variableText } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = `${variableBg} border border-secondaryText-light dark:border-secondaryText-dark px-1 mx-1 rounded font-semibold`;
  const images = [
    "/img/gallery/titulo.jpg",
    "/img/gallery/trip.JPG",
    "/img/gallery/random.jpg",
  ];

  function renderShowcaseImages() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {images.map((img) => {
          return (
            <div className="flex w-full bg-cover bg-no-repeat" key={img}>
              <Image
                alt={img}
                src={img}
                width={1000}
                height={1000}
                className="rounded w-full h-40 object-cover hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <p className={`${variableText} my-5`}>
        I&apos;m a{" "}
        <strong className="font-semibold">full stack developer </strong> who
        enjoys tackling challenging problems and delivering high quality
        products. My most recent projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-4">
        {showCase.map((pro) => {
          return (
            <ProjectCard
              key={pro.id}
              id={pro.id}
              name={pro.name}
              platform={pro.platform}
              company={pro.company}
              jobType={pro.jobType}
              img={pro.img}
              comapanyLogo={pro.companyLogo}
              style="mb-2"
            />
          );
        })}
      </div>
      <p className={`${variableText} my-11`}>
        And that&apos;s not all, you may check 👉🏼{" "}
        <a className={`${minimalLink} ${variableBg}`} href="/projects">
          all projects{" "}
        </a>{" "}
        and contributions. I&apos;m always trying to keep up to date with
        current tech and also continue learning to improve my skills. On my free
        time I enjoy cooking, reading, exercising, and programming cause{" "}
        <span className="italic">this is the way 🚀.</span>
      </p>

      {renderShowcaseImages()}

      <p className={`${variableText} my-11`}>
        I also provide various{" "}
        <a className={`${minimalLink} ${variableBg}`} href="/services">
          services{" "}
        </a>
        on the IT sector; but if you wanna know more{" "}
        <a className={`${minimalLink} ${variableBg}`} href="/about">
          about me{" "}
        </a>
        , check the page or reach out via any of the links below. 👇🏼
      </p>
    </div>
  );
}
