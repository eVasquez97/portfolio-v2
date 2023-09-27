import Image from "next/image";

export default function DynamicGallery() {
  const imgBlock = "block h-full w-full rounded object-cover hover:scale-105";
  return (
    <div className="container w-full">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex md:w-1/2 w-1/2 flex-wrap">
          <div className="w-full h-40 p-1 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/gallery/hobby1.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-80 p-1 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/gallery/grad.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex md:w-1/2 w-1/2 flex-wrap">
          <div className="w-full p-1 h-80 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/banner1.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full p-1 h-40 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/gallery/random4.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
