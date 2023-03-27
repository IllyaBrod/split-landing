import LinkButton from "./LinkButton";
import Image from "next/image";
import BackgroundImage from "../../public/img/bg-image.png";


const Showcase = ({id}: {id?: string}) => {
  return (
    <section className="h-screen w-full lg:flex">

      <div className="h-full flex items-center">
        <div className="text-center lg:text-left p-5 lg:px-20 lg:basis-1/2">
          <p className=" text-9xl md:text-huge text-primary leading-none font-black">split</p>

          <h1 className="mt-16 mb-9 text-showcase">
              Empower your business
          </h1>
          <p className="text-2xl text-secondary">
              We create an application to empower taxi companies to be
              able to compete in the industry by delivering improved UX
              and higher customer satisfaction.
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
            quality={100}
          />
        </div>

      </div>


    </section>

  );
};

export default Showcase;
