import { Header } from "@/components/molecules";
import data from "../utils/projects.json";
import { ProjectCard } from "@/components/organisms";
import { variableText } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <p className={`${variableText} mb-4`}>
        I&apos;m a{" "}
        <strong className="font-semibold text-highlight">
          Full Stack Software Developer
        </strong>{" "}
        with over five years of experience in creating web and mobile
        applications. I have a passion for solving complex problems and
        delivering high-quality products. Some of my principal projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {data.map((pro) => {
          return (
            <ProjectCard
              key={pro.id}
              id={pro.id}
              name={pro.name}
              platform={pro.platform}
              company={pro.company}
              jobType={pro.jobType}
              img={pro.img}
              techStack={pro.techStack}
            />
          );
        })}
      </div>
      <p className={`${variableText} mt-5`}>
        Or take a look at all my projects{" "}
        <a className="text-highlight font-semibold underline" href="/projects">
          here...
        </a>
      </p>
    </div>
  );
}
