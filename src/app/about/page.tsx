import { Title } from "@/components/atoms";
import Icon from "@/components/atoms/Icon";
import { ShowCase } from "@/components/molecules";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import data from "../../utils/data.json";
import { EducationType } from "./EducationType";

export default function About() {
  const { education, courses } = data;
  const images = [
    "/img/gallery/hobby1.jpg",
    "/img/gallery/random2.jpg",
    "/img/gallery/grad.jpg",
  ];

  function getEducationInfo(ed: EducationType) {
    return (
      <Link key={ed.title} href={ed.url} className="hover:font-normal">
        <div className="flex w-full my-4" key={ed.title}>
          <div className="flex flex-col w-full">
            <div className={`${variableText} text-left flex-wrap`}>
              <p className="font-normal underline">{ed.title}</p>
              <p className="text-sm flex-wrap mb-2">{ed.institute}</p>
              <p className="text-xs opacity-00">{ed.time}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-primary-light dark:bg-primary-dark min-w-full">
      <div className="flex flex-col w-full">
        <p className={`${variableText} mb-11 `}>
          I&apos;m a <span className="font-normal">full stack developer</span>{" "}
          from Honduras. I have over five years of experience in creating web
          and mobile applications and enjoy tackling challenging problems and
          delivering quality products that meet the needs of users and clients.
        </p>
        <ShowCase items={images} />
        <p className={`${variableText} my-11 `}>
          On my free time I enjoy programming, reading, exercising, and cooking
          - fried chicken is my specialty. I&apos;ve also been volunteering as
          an <span className="font-normal">interpreter</span> for medical and
          construction teams from the{" "}
          <span className="font-normal">Episcopal Church</span> in United States
          that come anually to Honduras to help. I&apos;ve been doing this
          volunteer work since 2007.
        </p>
      </div>

      <div className="flex flex-col w-full mb-8">
        <div>
          <Title
            text="Education"
            styles="font-normal"
            textColor="text-highlight"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {education.map((ed) => {
              return getEducationInfo(ed);
            })}
          </div>
        </div>
      </div>

      <Title
        text="Courses / Certifications"
        styles="my-8 font-normal"
        textColor="text-highlight"
      />
      <table className={`${variableText} table w-full text-left`}>
        <thead>
          <tr className="pb-2">
            <th className="max-w-[44px] text-sm opacity-80">Date</th>
            <th className="flex flex-wrap  px-1 text-sm opacity-80">Title</th>
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
                <td className="font-normal px-1">
                  <div className="py-1.5">
                    <p>{course.name}</p>
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
    </div>
  );
}
