import { Quote } from "@/components/organisms";
import ProjectCard from "@/components/organisms/ProjectCard";
import Link from "next/link";
import projects from "../utils/projects.json";

export default function Home() {
  const showCase = projects?.slice(0, 4);

  return (
    <section className="flex w-full flex-col space-y-4">
      <Quote quote="This is the way. - Din Djarin" style="mb-1" />

      <header className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
          Eduardo Vásquez — Fullstack Engineer
        </h1>
        <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          I&apos;m a{" "}
          <Link className="app-link mx-0.5" href="/about">
            Full Stack Engineer
          </Link>{" "}
          with 7+ years of experience building scalable web and mobile apps.
          Skilled in modern frameworks and cloud platforms, with a focus on
          real-time systems and clean architecture. Eager to learn, grow, and
          contribute to impactful engineering teams.
        </p>
      </header>

      <section
        aria-labelledby="featured-projects-heading"
        className="space-y-3 pt-2"
      >
        <div className="flex items-center justify-between">
          <h2
            id="featured-projects-heading"
            className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="rounded-full bg-highlight/10 px-3 py-1 text-xs font-semibold text-highlight transition-colors hover:bg-highlight/20"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
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
      </section>
    </section>
  );
}
