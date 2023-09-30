import projects from "../utils/projects.json";
import { ProjectCard } from "@/components/organisms";
import { variableBg, variableText } from "@/utils/constants";
import { ShowCase } from "@/components/molecules";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = `${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded ${variableText} font-semibold px-1 hover:underline`;
  const images = [
    "/img/gallery/titulo.jpg",
    "/img/gallery/trip.JPG",
    "/img/gallery/random.jpg",
  ];

  return (
    <div className="flex flex-col w-full">
      <p className={`${variableText} mb-5`}>
        I&apos;m a{" "}
        <strong className="font-semibold">full stack developer </strong> who
        enjoys tackling challenging problems and delivering high quality
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
      <p className={`${variableText} my-8`}>
        And that&apos;s not all, you may check 👉🏼{" "}
        <a className={`${minimalLink} ${variableBg}`} href="/projects">
          all projects{" "}
        </a>{" "}
        and contributions. I&apos;m always eager to learn new skills and
        technologies to enhance my professional growth. On my free time I enjoy
        cooking, reading, exercising, and programming cause{" "}
        <span className="italic">this is the way 🚀.</span>
      </p>

      <ShowCase items={images} />

      <p className={`${variableText} mt-11 mb-5`}>
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
