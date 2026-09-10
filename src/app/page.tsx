import { ProjectCard, Quote } from "@/components/organisms";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import projects from "../utils/projects.json";
import { ShowCase } from "@/components/molecules";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = "text-highlight mx-1 hover:underline";
  const images = ["/perfil.JPG", "/img/banner1.jpg", "/img/gallery/random.jpg"];

  return (
    <div className="flex flex-col w-full">
      <Quote quote="This is the way. - Din Djarin" style="mb-5" />
      <ShowCase items={images} />
      <p className={`${variableText} my-6`}>
        I&apos;m a{" "}
        <Link className={`${minimalLink}`} href="/services">
          Full Stack Engineer{" "}
        </Link>{" "}
        with 6+ years of experience building scalable web and mobile apps.
        Skilled in modern frameworks and cloud platforms, with a focus on
        real-time systems and clean architecture. Eager to learn, grow, and
        contribute to impactful engineering teams. Actively seeking new
        opportunities to contribute to high-impact engineering teams. My most
        recent projects include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-3 mt-2">
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
              techStack={pro.techStack}
            />
          );
        })}
      </div>
      <p className={`${variableText} my-5`}>
        On my free time I enjoy programming, reading, exercising, and cooking -
        fried chicken is my specialty. I&apos;ve also been volunteering as an{" "}
        <span className="font-normal">interpreter</span> for medical and
        construction teams from the{" "}
        <span className="font-normal">Episcopal Church</span> in United States
        that come anually to Honduras to help. I&apos;ve been doing this
        volunteer work since 2007.
      </p>
    </div>
  );
}
