import { ShowCase } from "@/components/molecules";
import { Title } from "@/components/atoms";
import data from "../../utils/data.json";
import Link from "next/link";
import { Quote } from "@/components/organisms";

export default function About() {
  const { volunteering } = data;
  const galleryImages = [
    "/perfil.JPG",
    "/img/banner1.jpg",
    "/img/gallery/random.jpg",
  ];

  return (
    <div className="w-full flex flex-col space-y-8 sm:space-y-10">
      <Quote quote="In my experience, there’s no such thing as luck. - Obi Wan Kenobi" />

      {/* Visual Header / Photo Gallery */}
      <section className="flex flex-col space-y-3">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm bg-neutral-100/50 dark:bg-neutral-900/30 p-1.5 sm:p-2">
          <ShowCase items={galleryImages} />
        </div>
      </section>

      {/* Community & Beyond Code */}
      <section className="space-y-3">
        <Title
          text="Community & Beyond Code"
          styles="text-lg sm:text-xl font-bold"
        />

        <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
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

        <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            I earned my degree in Computer Science Engineering from{" "}
            <Link
              href="https://unicah.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 dark:text-neutral-100 hover:text-highlight underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 transition-colors"
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
              className="font-semibold text-neutral-900 dark:text-neutral-100 hover:text-highlight underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 transition-colors"
            >
              Escuela e Instituto Episcopal Bilingüe El Buen Pastor
            </Link>{" "}
            (2003 – 2015), establishing fluent English communication skills
            early on.
          </p>
        </div>
      </section>
    </div>
  );
}
