import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import { Card } from "@/components/molecules";
import Image from "next/image";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import { EducationType } from "./EducationType";
import { DynamicGallery } from "@/components/organisms";

export default function About() {
  const { education, courses } = data;

  function getEducationInfo(ed: EducationType) {
    return (
      <Link key={ed.title} href={ed.url} className="hover:scale-105">
        <div
          className="flex border border-secondaryText-light dark:border-secondaryText-dark px-2 mx-1 rounded w-full"
          key={ed.title}
        >
          <div className="p-2 flex flex-col w-full items-center">
            <div className="flex rounded-full">
              <Image
                className="border border-secondaryText-light dark:border-secondaryText-dark w-16 h-16 rounded-full mr-2 object-cover mb-3"
                src={ed.image || "/img/banner1.jpg"}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className={`${variableText} text-center flex-wrap`}>
              <p className="font-semibold mb-2">{ed.title}</p>
              <p className="font-normal text-sm flex-wrap mb-2">
                {ed.institute}
              </p>
              <p className="font-normal italic text-xs opacity-60">{ed.time}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full">
      <div className="flex flex-col w-full">
        <p className={`${variableText} mb-11`}>
          I&apos;m a <span className="font-semibold">full stack developer</span>{" "}
          from Honduras ☕. I have over five years of experience in creating web
          and mobile applications and enjoy tackling challenging problems and
          delivering high quality products that meet the needs of users and
          clients.
        </p>
        <DynamicGallery />
        <p className={`${variableText} text-base mb-1 mt-8`}>
          I&apos;ve been volunteering as a{" "}
          <span className="font-semibold">translator/interpreter</span> for
          medical and construction teams from the{" "}
          <span className="font-semibold">Episcopal Church</span> in United
          States that come anually to Honduras to help. I&apos;ve been doing
          this volunteer work since 2007.
        </p>
      </div>

      <div className="flex flex-col w-full my-8">
        <div>
          <Title text="Education" size="base" styles="font-semibold" />
          <div className="grid md:grid-cols-2 gap-3 my-6">
            {education.map((ed) => {
              return getEducationInfo(ed);
            })}
          </div>
        </div>
      </div>

      <Title text="Courses" size="base" styles="my-8 font-semibold" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {courses.map((course) => {
          return (
            <Card
              key={course.name}
              certificationID={course.certificationID}
              company={course.company}
              headerColor={course.headerColor}
              name={course.name}
              time={course.time}
              url={course.url}
              img={course.img}
            />
          );
        })}
      </div>
    </div>
  );
}
