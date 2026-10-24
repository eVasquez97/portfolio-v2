import { Quote } from "@/components/organisms";
import ProjectCard from "@/components/organisms/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import data from "../utils/data.json";
import projects from "../utils/projects.json";

export default function Home() {
  const showCase = projects?.slice(0, 2);
  const [coverBefore, coverAfter] = data.cover.split("Full Stack Engineer");

  const numLobes = 12;
  const baseRadius = 0.46;
  const waveAmplitude = 0.028;
  const numPoints = 360;
  const scallopPolygon = `polygon(${Array.from(
    { length: numPoints },
    (_, i) => {
      const theta = (2 * Math.PI * i) / numPoints;
      const r =
        baseRadius + waveAmplitude * Math.sin(numLobes * theta - Math.PI / 4);
      const x = (0.5 + r * Math.cos(theta)) * 100;
      const y = (0.5 + r * Math.sin(theta)) * 100;
      return `${x.toFixed(3)}% ${y.toFixed(3)}%`;
    },
  ).join(", ")})`;

  return (
    <section className="flex w-full flex-col space-y-5 sm:space-y-5">
      <Quote quote="This is the way. - Din Djarin" style="mb-0" />

      <header className="animate-fade-in stagger-1 flex flex-col-reverse items-center gap-4 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
        <div className="w-full space-y-2">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
            Eduardo Vásquez — Fullstack Engineer
          </h1>
          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {coverAfter !== undefined ? (
              <>
                {coverBefore}
                <Link className="app-link mx-0.5" href="/about">
                  Full Stack Engineer
                </Link>
                {coverAfter}
              </>
            ) : (
              data.cover
            )}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="animate-scale-in stagger-2 relative h-48 w-48 flex-shrink-0 drop-shadow-sm transition-transform duration-300 ease-out hover:scale-[1.03] sm:h-52 sm:w-52">
            <div
              className="relative h-full w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800"
              style={{
                clipPath: scallopPolygon,
                WebkitClipPath: scallopPolygon,
              }}
            >
              <Image
                src="/perfil.JPG"
                alt="Portrait of Eduardo Vásquez"
                fill
                sizes="(max-width: 768px) 192px, 208px"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="featured-projects-heading"
        className="animate-fade-in stagger-2 space-y-5"
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
            aria-label="View all projects"
            className="focus-ring rounded-full bg-highlight/10 px-3 py-1 text-xs font-semibold text-highlight transition-all hover:bg-highlight/20 active:scale-95"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
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
