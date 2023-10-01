import { ProjectCard } from "@/components/organisms";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import projects from "../utils/projects.json";
import { ShowCase } from "@/components/molecules";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = `${variableText} font-normal hover:underline mx-1 underline opacity-80 hover:opacity-100`;
  const images = [
    "/img/gallery/titulo.jpg",
    "/img/gallery/trip.JPG",
    "/img/gallery/random.jpg",
  ];

  return (
    <div className="flex flex-col w-full">
      <p className={`${variableText} mb-5 font-light`}>
        I&apos;m a{" "}
        <Link className={`${minimalLink}`} href="/services">
          full stack developer{" "}
        </Link>{" "}
        who enjoys tackling challenging problems and delivering quality
        products. I consider myself a React JS master and Python & TypeScript
        enthusiast. My most recent projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
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
      <p className={`${variableText} my-8 font-light`}>
        And that&apos;s not all, you may check{" "}
        <Link className={`${minimalLink}`} href="/projects">
          all projects{" "}
        </Link>{" "}
        and contributions. I&apos;m always eager to learn new skills and
        technologies to enhance my professional growth. On my free time I enjoy
        cooking, reading, exercising, and programming cause this is the way. 🚀
      </p>
      <ShowCase items={images} />
      <p className={`${variableText} my-8 font-light`}>
        I also provide various{" "}
        <Link className={`${minimalLink}`} href="/services">
          services{" "}
        </Link>
        on the IT sector; but if you wanna know more{" "}
        <Link className={`${minimalLink}`} href="/about">
          about me{" "}
        </Link>
        , check the page or reach out via any of the links below.
      </p>
    </div>
  );
}
