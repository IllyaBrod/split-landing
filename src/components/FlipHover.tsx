/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {StaticImageData} from "next/image";
import Image from "next/image";

export default function FlipHover({imageData, title, description, background, backDescription}:
  {imageData: StaticImageData, title: string, description: string,
    background: string, backDescription: string}) {
  return (
    <div className="group max-w-[400px] md:w-[400px] lg:h-[450px]">
      <div className="relative h-full w-full shadow-xl rounded-4xl transition-all duration-500 [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:[-webkit-transform:rotateY(180deg)]">
        <div className={`flex flex-col items-center
       rounded-4xl text-center px-7 pb-7 h-full w-full pt-3 ${background}`}>

          <Image src={imageData} height={270} alt="conversion image" />
          <h2 className="mb-6 mt-2">{title}</h2>
          <p className="text-xl">{description}</p>

        </div>
        <div className="absolute inset-0 h-full w-full rounded-4xl text-center text-slate-200 [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center bg-showcase/95 w-full px-7 rounded-4xl">
            <p className="text-xl text-white">{backDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
