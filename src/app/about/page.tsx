import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import { Card, TimeItem, Timeline } from "@/components/molecules";
import { Quote } from "@/components/organisms";
import Image from "next/image";

export default function Courses() {
  const { education, courses, cover } = data;

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full p-4">
      <Quote quote={cover} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full justify-start items-center">
        <div>
          <Title text="Education" size="2xl" />
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
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            src="/img/banner1.jpg"
            alt="Eduardo"
            width={1000}
            height={1000}
            className="w-full transition duration-300 ease-in-out hover:scale-110 mb-6"
          />
        </div>
      </div>

      <Title text="Courses" size="2xl" styles="mb-8 mt-11" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
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
