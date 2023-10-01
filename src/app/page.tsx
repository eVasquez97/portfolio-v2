import projects from "../utils/projects.json";
import { ProjectCard } from "@/components/organisms";
import { variableText } from "@/utils/constants";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = `${variableText} italic font-semibold hover:underline`;

  return (
    <div className="flex flex-col w-full">
      <p className={`${variableText} mb-5`}>
        I&apos;m a{" "}
        <a className={`${minimalLink}`} href="/services">
          full stack developer{" "}
        </a>{" "}
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
      <p className={`${variableText} my-8`}>
        And that&apos;s not all, you may check{" "}
        <a className={`${minimalLink}`} href="/projects">
          all projects{" "}
        </a>{" "}
        and contributions. I&apos;m always eager to learn new skills and
        technologies to enhance my professional growth. On my free time I enjoy
        cooking, reading, exercising, and programming cause{" "}
        <span className="italic">this is the way.</span>I also provide various{" "}
        <a className={`${minimalLink}`} href="/services">
          services{" "}
        </a>
        on the IT sector; but if you wanna know more{" "}
        <a className={`${minimalLink}`} href="/about">
          about me{" "}
        </a>
        , check the page or reach out via any of the links below.
      </p>
    </div>
  );
}
