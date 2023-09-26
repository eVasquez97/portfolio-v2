import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import { Card, Header, TimeItem, Timeline } from "@/components/molecules";
import Image from "next/image";
import { variableText } from "@/utils/constants";

export default function Courses() {
  const { education, courses, volunteering } = data;

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full">
      <Header />
      <div className="flex flex-col w-full">
        <p className={`${variableText}`}>
          I&apos;m a <span className="font-semibold">full stack developer</span>{" "}
          from Honduras ☕. I have over five years of experience in creating web
          and mobile applications and enjoy tackling challenging problems and
          delivering high quality products that meet the needs of users and
          clients.
        </p>
        <Image
          src="/img/banners/portfolio.png"
          width={2000}
          height={2000}
          alt="Eduardo Vasquez"
          className="w-full h-[200px] object-cover rounded my-5 hover:opacity-95"
        />
        <p className={`${variableText} mt-5`}>
          I am proficient in various programming languages and frameworks, such
          as{" "}
          <span className="font-semibold">
            JavaScript, React, Node.js, Python, Django, and MongoDB
          </span>
          . I am always eager to learn new skills and technologies to enhance my
          professional growth and development. 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center mb-14 mt-16">
        <div>
          <Title text="Education" size="base" />
          <Timeline>
            {education.map((ed) => {
              return (
                <TimeItem
                  key={ed.title}
                  time={ed.time}
                  title={ed.title}
                  description={ed.institute}
                  image={ed.image}
                  url={ed.url}
                />
              );
            })}
          </Timeline>
        </div>
        <div className="-mt-4">
          <Title text="Volunteer work" size="base" />
          <Image
            src="/church.png"
            alt="Episcopal Church"
            width={1000}
            height={1000}
            className="w-48 transition duration-300 ease-in-out hover:scale-105 mb-4 mt-6"
          />
          <p className="text-lg mb-1 font-semibold">
            {volunteering.role} - {volunteering.company}
          </p>
          <p className="text-sm mb-4 opacity-80">Since: {volunteering.start}</p>
          <p className={`${variableText}`}>{volunteering.description}</p>
        </div>
      </div>

      <Title text="Courses" size="base" styles="mb-8 mt-11" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
