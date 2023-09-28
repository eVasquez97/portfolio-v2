"use client";
import { Title } from "@/components/atoms";
import data from "../../utils/projects.json";
import { ProjectCard } from "@/components/organisms";
import { useState, useEffect } from "react";

export default function Projects() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`flex flex-col w-full ${
        show ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
      }`}
    >
      <Title
        text="Projects and contributions"
        size="xl"
        styles="my-8 font-semibold"
      />
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
