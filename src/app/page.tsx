import { Header } from "@/components/molecules";
import projects from "../utils/projects.json";
import { DynamicGallery, ProjectCard } from "@/components/organisms";
import { variableBg, variableText } from "@/utils/constants";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink =
    "border border-secondaryText-light dark:border-secondaryText-dark px-2 mx-1 rounded font-semibold";

  return (
    <div className="flex flex-col w-full">
      <Header />
      <p className={`${variableText} my-5`}>
        I&apos;m a{" "}
        <strong className="font-semibold">full stack developer 💻</strong> who
        enjoys tackling challenging problems and delivering high quality
        products. My most recent projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
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
        <span className="font-medium">this is the way 🚀.</span>
      </p>

      <DynamicGallery />

      <p className={`${variableText} mt-11`}>
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
