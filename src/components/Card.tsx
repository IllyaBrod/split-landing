import {StaticImageData} from "next/image";
import Image from "next/image";

const Card = ({imageData, title, description, background}:
   {imageData: StaticImageData, title: string, description: string,
     background: string}) => {
  return (
    <div
      className={`flex flex-col items-center max-w-[400px] lg:h-[450px]
      rounded-4xl text-center px-7 pb-12 pt-3 ${background} shadow-2xl`}
    >
      <Image src={imageData} height={270} alt="conversion image" />
      <h2 className="mb-6 mt-2">{title}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default Card;
