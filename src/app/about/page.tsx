import { Title } from "@/components/atoms";
import { ShowCase } from "@/components/molecules";
import { Quote } from "@/components/organisms";
import Link from "next/link";
import data from "../../utils/data.json";

const serviceIcons: Record<string, string> = {
  "Software Analyst":
    "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Software Developer": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "Hardware maintenance":
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  "Technical Interviewer":
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
};

export default function About() {
  const { volunteering, services } = data;
  const galleryImages = [
    "/perfil.JPG",
    "/img/banner1.jpg",
    "/img/gallery/random.jpg",
  ];

  return (
    <div className="flex w-full flex-col space-y-8 sm:space-y-10">
      <Quote quote="In my experience, there’s no such thing as luck. - Obi Wan Kenobi" />

      {/* Visual Header / Photo Gallery */}
      <section aria-label="Photo Gallery" className="flex flex-col space-y-3">
        <div className="overflow-hidden rounded-[28px] border border-neutral-200/80 bg-neutral-100/50 p-1.5 dark:border-neutral-800/80 dark:bg-neutral-900/30 sm:p-2">
          <ShowCase items={galleryImages} />
        </div>
      </section>

      {/* Community & Beyond Code */}
      <section className="space-y-3">
        <Title
          text="Community & Beyond Code"
          styles="text-lg sm:text-xl font-bold"
        />

        <div className="space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            Since {volunteering?.start || "2007"}, I have actively volunteered
            as a translator and interpreter for annual medical and construction
            missions from the Episcopal Church in the United States, supporting
            local communities across Honduras.
          </p>
          <p>
            Outside of software engineering, I stay energized through consistent
            fitness routines, continuous non-fiction reading, and exploring
            culinary recipes — fried chicken being my absolute specialty.
          </p>
        </div>
      </section>

      {/* Education & Academic Background */}
      <section className="space-y-3">
        <Title
          text="Education & Academic Background"
          styles="text-lg sm:text-xl font-bold"
        />

        <div className="space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            I earned my degree in Computer Science Engineering from{" "}
            <Link
              href="https://unicah.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-highlight dark:text-neutral-100 dark:decoration-neutral-700"
            >
              Universidad Católica de Honduras
            </Link>{" "}
            (2015 – 2020), where I built a solid foundation in software
            architecture, algorithm design, and database systems.
          </p>
          <p>
            Prior to my university studies, I completed my bilingual education
            at{" "}
            <Link
              href="https://www.facebook.com/EBPHonduras/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-highlight dark:text-neutral-100 dark:decoration-neutral-700"
            >
              Escuela e Instituto Episcopal Bilingüe El Buen Pastor
            </Link>{" "}
            (2003 – 2015), establishing fluent English communication skills
            early on.
          </p>
        </div>
      </section>

      {/* Services Section moved to the base of About */}
      <section className="space-y-4">
        <div>
          <Title text="Services" styles="text-lg sm:text-xl font-bold" />
          <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Core technical services and engineering capabilities I offer:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services?.map((sr) => {
            const iconPath =
              serviceIcons[sr.service] || "M13 10V3L4 14h7v7l9-11h-7z";

            return (
              <article
                key={sr.service}
                className="card-interactive flex flex-col justify-between space-y-4 p-5"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-highlight/20 bg-highlight/15 text-highlight">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={iconPath}
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {sr.service}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {sr.description}
                  </p>
                </div>

                {sr.benefits && sr.benefits.length > 0 && (
                  <div className="flex flex-col gap-1.5 border-t border-neutral-200/60 pt-3 dark:border-neutral-800/60">
                    {sr.benefits.map((b) => (
                      <div
                        key={b}
                        className="inline-flex items-start gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="mt-0.5 text-xs font-bold leading-none text-highlight">
                          ✓
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
