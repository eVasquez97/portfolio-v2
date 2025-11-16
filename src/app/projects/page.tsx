import { ProjectCard, Quote } from "@/components/organisms";
import data from "../../utils/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col w-full">
      <Quote quote="In my experience, there’s no such thing as luck. - Obi Wan Kenobi" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
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
