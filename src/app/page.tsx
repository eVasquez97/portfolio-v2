import { Quote } from "@/components/organisms";
import ProjectCard from "@/components/organisms/ProjectCard";
import Link from "next/link";
import projects from "../utils/projects.json";

export default function Home() {
  const showCase = projects?.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <Quote quote="This is the way. - Din Djarin" style="mb-2" />
      <p className="my-2 text-sm sm:text-base leading-relaxed">
        I&apos;m a{" "}
        <Link className="app-link mx-0.5" href="/services">
          Full Stack Engineer
        </Link>{" "}
        with 6+ years of experience building scalable web and mobile apps.
        Skilled in modern frameworks and cloud platforms, with a focus on
        real-time systems and clean architecture. Eager to learn, grow, and
        contribute to impactful engineering teams. My most recent projects:
      </p>

      <div className="mt-3 flex flex-col gap-3">
        {showCase.map((pro) => (
          <ProjectCard
            key={pro.id}
            id={pro.id}
            name={pro.name}
            platform={pro.platform}
            jobType={pro.jobType}
            company={pro.company}
            img={pro.img}
            companyLogo={pro.companyLogo}
            techStack={pro.techStack}
          />
        ))}
      </div>
    </div>
  );
}
