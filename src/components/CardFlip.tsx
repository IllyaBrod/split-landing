import styles from "@/styles/CardFlip.module.css";
import {StaticImageData} from "next/image";
import Image from "next/image";
import {GiClick} from "react-icons/gi";

const CardFlip = ({imageData, title, description, background, backDescription}:
  {imageData: StaticImageData, title: string, description: string,
    background: string, backDescription: string}) => {
  return (
    <div className="max-w-[400px] w-full md:w-[400px] h-[450px]">
      <div className={styles.card}>
        <div className={`${styles.front} flex flex-col items-center
         rounded-4xl text-center px-7 pb-7 pt-3  ${background}`}>
          <GiClick size={30} color="#1c1c1c" className="absolute left-5 top-5 opacity-50" />
          <Image src={imageData} height={270} alt="conversion image" />
          <h2 className="mb-6 mt-2">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
        <div className={`${styles.back}`}>
          <div className="flex h-full flex-col items-center justify-center text-center bg-showcase/95 w-full px-7">
            <p className="text-xl text-white">{backDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
