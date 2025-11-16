import { ProjectCard, Quote } from "@/components/organisms";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import projects from "../utils/projects.json";
import data from "../utils/data.json";
import { Header, ShowCase } from "@/components/molecules";
import Icon from "@/components/atoms/Icon";
import { Title } from "@/components/atoms";

export default function Home() {
  const showCase = projects?.slice(0, 4);
  const minimalLink = "text-highlight mx-1 hover:underline";
  const images = ["/perfil.jpg", "/img/banner1.JPG", "/img/gallery/random.JPG"];
  const { courses } = data;

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-2">
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
      <p className={`${variableText} my-5`}>
        On my free time I enjoy programming, reading, exercising, and cooking -
        fried chicken is my specialty. I&apos;ve also been volunteering as an{" "}
        <span className="font-normal">interpreter</span> for medical and
        construction teams from the{" "}
        <span className="font-normal">Episcopal Church</span> in United States
        that come anually to Honduras to help. I&apos;ve been doing this
        volunteer work since 2007.
      </p>

      <Title
        text="Courses / Certifications"
        styles="my-5 font-normal"
        textColor="text-highlight"
      />
      <table className={`${variableText} table w-full text-left mb-8`}>
        <thead>
          <tr className="pb-2">
            <th className="max-w-[44px] text-sm opacity-80 font-normal">
              Date
            </th>
            <th className="flex flex-wrap  px-1 text-sm opacity-80 font-normal">
              Title
            </th>
            <th className="max-w-[44px]"></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr
                key={course.certificationID}
                className="px-2 border-t-[1px] border-t-secondaryText-light dark:border-t-secondaryText-dark"
              >
                <td className="py-3  text-xs pr-2 opacity-80">
                  <p>{course.time}</p>
                </td>
                <td className="px-1">
                  <div className="py-1.5">
                    <p className="opacity-95">{course.name}</p>
                    <p className="text-xs opacity-60">{course.company}</p>
                  </div>
                </td>
                <td className="text-right  pl-2">
                  <Link href={course.url} target="_blank">
                    <Icon
                      icon="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      styles="w-5 h-5 opacity-60"
                    />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Quote quote="Do or do not, there is not try. - Yoda" />
    </div>
  );
}
