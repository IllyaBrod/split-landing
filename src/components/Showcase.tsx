import LinkButton from "./LinkButton";
import Image from "next/image";
import BackgroundImage from "../../public/img/bg-image.png";


const Showcase = ({id}: {id?: string}) => {
  return (

    <div className="h-full flex items-center max-w-[1920px]">
      <div className="text-center lg:text-left p-5 md:px-14 xl:px-20 lg:basis-1/2">
        <p className="text-9xl md:text-huge text-primary leading-none font-black">split</p>

        <h1 className="mt-16 mb-6 xl:mb-9 text-showcase">
              Empower your business
        </h1>
        <p className="text-xl xl:text-2xl text-secondary">
          We are in the process of developing an application specifically tailored for taxi companies, aimed at boosting their competitiveness in the industry by providing a superior user experience and enhancing customer satisfaction. With our innovative technology, taxi companies can improve their operations, streamline their services, and ultimately, drive greater success.
        </p>

        <LinkButton id="contact" text="Contact Us" />
      </div>

      <div className="hidden lg:block lg:w-1/2 lg:basis-1/2 lg:self-start">
        <Image
          src={BackgroundImage}
          alt={"Background image"}
          style={{
            objectFit: "cover",
            height: "100vh",
          }}
          quality={80}
        />
      </div>

    </div>


  );
};

export default Showcase;
