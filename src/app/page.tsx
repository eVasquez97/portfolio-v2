import projects from "../utils/projects.json";
import { DynamicGallery, ProjectCard } from "@/components/organisms";
import { variableText } from "@/utils/constants";

export default function Home() {
  const showCase = projects?.slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      <p className={`${variableText} mb-4`}>
        I&apos;m a{" "}
        <strong className="font-semibold text-highlight">
          full stack developer 💻
        </strong>{" "}
        with over five years of experience in creating web and mobile
        applications. I enjoy tackling challenging problems and delivering high
        quality products. My most recent projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
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
              techStack={pro.techStack}
              comapanyLogo={pro.companyLogo}
              style="mb-3"
            />
          );
        })}
      </div>
      <p className={`${variableText} mt-5`}>
        And there&apos;s a lot more that can be seen 👉🏼{" "}
        <a
          className="border border-secondaryText-light dark:border-secondaryText-dark px-2 rounded text-highlight font-semibold underline animate-pulse"
          href="/projects"
        >
          here.{" "}
        </a>
      </p>
      <p className={`${variableText} mt-5 mb-11`}>
        I&apos;m always trying to keep up to date with current tech and also
        continue learning to improve my skills. I consider myself a React master
        and a Python enthusiast. On my free time I enjoy cooking, reading,
        exercising, and programming cause{" "}
        <span className="font-semibold italic">This is the way 🚀.</span>
      </p>

      <DynamicGallery />

      <p className={`${variableText} mt-11`}>
        I also provide various{" "}
        <a
          className="border border-secondaryText-light dark:border-secondaryText-dark px-2 rounded text-highlight font-semibold underline animate-pulse"
          href="/services"
        >
          services{" "}
        </a>
        👈🏼 ranging from hardware maintenance all the way to code/project audits,
        mentoring and software development; but if you wanna know more about me,
        just click 👉🏼{" "}
        <a
          className="border border-secondaryText-light dark:border-secondaryText-dark px-2 rounded text-highlight font-semibold underline animate-pulse"
          href="/about"
        >
          here{" "}
        </a>
        , or reach out to me via any of the links below. 👇🏼
      </p>
    </div>
  );
}
