import Icon from "@/components/atoms/Icon";
import { Quote } from "@/components/organisms";
import { variableText } from "@/utils/constants";
import Link from "next/link";
import data from "../../utils/data.json";

export default function CoursesPage() {
  const { courses } = data;

  return (
    <div className="flex flex-col w-full">
      <Quote quote="Do or do not, there is no try. - Yoda" />

      <table className={`${variableText} table w-full text-left my-6`}>
        <thead>
          <tr className="pb-2 border-b border-b-secondaryText-light/30 dark:border-b-secondaryText-dark/30">
            <th className="max-w-[44px] text-sm opacity-80 font-normal pb-2">
              Date
            </th>
            <th className="flex flex-wrap px-1 text-sm opacity-80 font-normal pb-2">
              Title
            </th>
            <th className="max-w-[44px] pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr
                key={course.certificationID}
                className="px-2 border-t-[1px] border-t-secondaryText-light/30 dark:border-t-secondaryText-dark/30"
              >
                <td className="py-3 text-xs pr-2 opacity-80 align-top">
                  <p>{course.time}</p>
                </td>
                <td className="px-1 py-3 align-top">
                  <div>
                    <p className="opacity-95 font-medium">{course.name}</p>
                    <p className="text-xs opacity-60">{course.company}</p>
                  </div>
                </td>
                <td className="text-right pl-2 py-3 align-top">
                  <Link href={course.url} target="_blank">
                    <Icon
                      icon="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      styles="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
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
