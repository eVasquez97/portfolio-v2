import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/atoms";
import { DynamicGallery } from "@/components/organisms";
import { EducationType } from "./EducationType";
import { variableText } from "@/utils/constants";
import data from "../../utils/data.json";
import Icon from "@/components/atoms/Icon";
import { ShowCase } from "@/components/molecules";

export default function About() {
  const { education, courses } = data;
  const images = [
    "/img/gallery/titulo.jpg",
    "/img/gallery/trip.JPG",
    "/img/gallery/random.jpg",
  ];

  function getEducationInfo(ed: EducationType) {
    return (
      <Link key={ed.title} href={ed.url} className="hover:font-semibold">
        <div className="flex w-full my-4" key={ed.title}>
          <div className="flex flex-col w-full">
            <div className={`${variableText} text-left flex-wrap`}>
              <p className="font-semibold">{ed.title}</p>
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
        <ShowCase items={images} />
        <p className={`${variableText} my-11`}>
          I&apos;m a <span className="font-semibold">full stack developer</span>{" "}
          from Honduras. I have over five years of experience in creating web
          and mobile applications and enjoy tackling challenging problems and
          delivering quality products that meet the needs of users and clients.
          Besides coding, I also enjoy going to the beach and cooking - fried
          chicken is my specialty. I&apos;ve also been volunteering as an{" "}
          <span className="font-semibold">interpreter</span> for medical and
          construction teams from the{" "}
          <span className="font-semibold">Episcopal Church</span> in United
          States that come anually to Honduras to help. I&apos;ve been doing
          this volunteer work since 2007.
        </p>
      </div>

      <div className="flex flex-col w-full mb-8">
        <div>
          <Title text="Education" size="base" styles="font-semibold" />
          <div className="flex flex-col w-full">
            {education.map((ed) => {
              return getEducationInfo(ed);
            })}
          </div>
        </div>
      </div>

      <Title
        text="Courses / Certifications"
        size="base"
        styles="my-8 font-semibold"
      />
      <table className={`${variableText} table w-full text-left`}>
        <thead>
          <tr className="font-normal pb-2">
            <th className="max-w-[44px] font-normal">
              <p>Date</p>
            </th>
            <th className="flex flex-wrap font-normal px-1">
              <p>Title</p>
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
                <td className="py-3 font-light text-sm pr-2">
                  <p>{course.time}</p>
                </td>
                <td className="font-normal px-1">
                  <div className="py-1">
                    <p>{course.name}</p>
                    <p className="text-xs opacity-60">{course.company}</p>
                  </div>
                </td>
                <td className="text-right font-light pl-2">
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
