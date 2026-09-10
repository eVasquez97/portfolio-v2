import { ShowCase } from "@/components/molecules";
import { variableText, variableBg } from "@/utils/constants";
import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { education } = data;
  const images = ["/perfil.JPG", "/img/banner1.jpg", "/img/gallery/random.jpg"];

  return (
    <div className="flex flex-col w-full">
      <ShowCase items={images} />

      <p className={`${variableText} my-6`}>
        On my free time I enjoy programming, reading, exercising, and cooking -
        fried chicken is my specialty. I&apos;ve also been volunteering as an{" "}
        <span className="font-normal">interpreter</span> for medical and
        construction teams from the{" "}
        <span className="font-normal">Episcopal Church</span> in United States
        that come annually to Honduras to help. I&apos;ve been doing this
        volunteer work since 2007.
      </p>

      <div className="mb-6">
        <Title text="Education" styles="text-lg mb-3" />
        <div className="flex flex-col gap-2.5 my-2">
          {education.map((ed) => (
            <Link
              key={ed.title}
              href={ed.url}
              target="_blank"
              className="group block"
            >
              <div
                className={`${variableBg} border border-secondaryText-light/30 dark:border-secondaryText-dark/30 rounded-lg p-3 flex items-center justify-between transition-colors hover:border-highlight/50`}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={ed.image}
                    alt={ed.title}
                    width={50}
                    height={50}
                    className="rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm text-highlight group-hover:underline">
                      {ed.title}
                    </p>
                    <p className="text-sm opacity-75">{ed.institute}</p>
                    <span className="text-xs opacity-60">{ed.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
