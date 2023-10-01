import Image from "next/image";

export default function DynamicGallery() {
  const imgBlock =
    "block h-full w-full object-cover opacity-95 hover:opacity-100";
  return (
    <div className="container w-full">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex md:w-1/3 w-1/2 flex-wrap">
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
        <div className="flex md:w-1/3 w-1/2 flex-wrap">
          <div className="w-full p-1 h-80 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/gallery/hobby2.jpg"
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
        <div className="flex md:w-1/3 w-full flex-wrap">
          <div className="md:w-full w-1/2 h-40 p-1 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/gallery/random5.png"
              width={1000}
              height={1000}
            />
          </div>
          <div className="md:w-full w-1/2 h-40 md:h-80 p-1 md:p-2">
            <Image
              alt="gallery"
              className={imgBlock}
              src="/img/banner1.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
