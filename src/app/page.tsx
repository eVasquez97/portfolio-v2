import Image from "next/image";
import data from "../utils/data.json";
import { Title } from "@/components/atoms";
import ContactForm from "@/components/organisms/ContactForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-primary-light dark:bg-primary-dark p-5 md:w-2/3 mb-4">
        <Image
          alt="Eduardo"
          src="/profile2.png"
          width={300}
          height={300}
          className="self-center p-2 mb-4 rounded-full"
        />
        <p className="dark:text-text-dark text-text-light opacity-75 text-sm text-justify mb-10">
          {data?.cover}
        </p>
      </div>
      <div className="max-w-[1024px] w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 min-w-full mb-10 p-1 gap-1">
          <div>
            <Title text="Contact Me" size="xl" />
            <ContactForm />
          </div>
          <Image
            alt="banner1"
            src="/img/banner1.jpg"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
