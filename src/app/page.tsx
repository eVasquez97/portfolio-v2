import data from "../utils/projects.json";
import { ProjectCard } from "@/components/organisms";

export default function Home() {
  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark p-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            />
          );
        })}
      </div>
    </div>
  );
}
