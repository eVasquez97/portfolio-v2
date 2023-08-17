import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import { TimeItem, Timeline } from "@/components/molecules";

export default function Courses() {
  const { education, courses } = data;
  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full p-4">
      <Title text="Education" size="xl" />
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

      <Title text="Courses" size="xl" />
    </div>
  );
}
