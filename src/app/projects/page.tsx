"use client";
import { Title } from "@/components/atoms";
import data from "../../utils/projects.json";
import { ProjectCard } from "@/components/organisms";

export default function Projects() {
  return (
    <div className="flex flex-col w-full">
      <Title text="Projects and contributions" size="xl" styles="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
