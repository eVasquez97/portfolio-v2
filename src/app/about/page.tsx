import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import { Card, Header, TimeItem, Timeline } from "@/components/molecules";
import Image from "next/image";
import { variableText } from "@/utils/constants";

export default function Courses() {
  const { education, courses, cover, volunteering } = data;

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full">
      <Header />
      <div className="flex w-full">
        <p className={`${variableText}`}>{cover}</p>
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
            className="w-80 transition duration-300 ease-in-out hover:scale-110 mb-4 mt-6"
          />
          <p className="text-lg text-highlight mb-1 font-bold">
            {volunteering.role}
          </p>
          <p className={`${variableText} font-semibold`}>
            {volunteering.company}
          </p>
          <p className="text-sm text-highlight mb-4">
            Since: {volunteering.start}
          </p>
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
