import { Title } from "@/components/atoms";
import { ProjectCard } from "@/components/organisms";
import data from "../../utils/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col w-full">
      <Title
        text="Projects"
        styles="mb-4 font-normal"
        textColor="text-highlight"
      />
      <div className="grid grid-cols-1 gap-3">
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
              intro={pro.intro}
              comapanyLogo={pro.companyLogo}
              style="mb-2"
            />
          );
        })}
      </div>
    </div>
  );
}
