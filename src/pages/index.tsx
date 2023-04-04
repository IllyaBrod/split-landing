import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import TaxiTownSprite from "../../public/img/section-sprite.png";
import AnalyticsSprite from "../../public/img/analytics.png";
import ApplicationSprite from "../../public/img/application.png";
import ConversionSprite from "../../public/img/conversion.png";
import GpsSprite from "../../public/img/gps-track.png";
import SplitBill from "../../public/img/split-bill.png";
import ChooseDriver from "../../public/img/choose-driver.png";
import AppCustomer from "../../public/img/app-customer.png";
import AboutUsImg from "../../public/img/about-us-2.png";

import Showcase from "@/components/Showcase";
import Head from "next/head";
import {FC, useState} from "react";
import Footer from "@/components/Footer";
import Success from "@/components/Success";
import CardFlip from "@/components/CardFlip";


/**
 * Home page
 * @return Home page
 */
const Home: FC = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Head>
        <title>Split</title>
        <meta name="description"
          content="Split - solution for your taxi company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {success && (
        <Success setSuccess={setSuccess} />
      )}

      <section className="bg-showcase w-full h-screen lg:flex">
        <Showcase />
      </section>

      <main className="w-full h-full overflow-hidden">

        <section id="digitalize" className="lg:h-screen flex
        flex-col lg:flex-row items-center m-auto container lg:justify-around">

          <div className="basis-3/5 lg:h-full">
            <Image
              src={TaxiTownSprite}
              alt={"Taxi Town Sprite"}
              style={{
                objectFit: "contain",
                height: "100%",
                width: "auto",
              }}
              quality={100}
            />
          </div>

          <div className="basis-2/5 text-center lg:text-left py-10">
            <h1 className="mb-9">
              Digitalize your Business
            </h1>
            <p className="lg:text-2xl">
              Allow your customers to easily order taxis through the app
              and get innovative features that will boost their satisfaction.<br/>

              <br/>
              In addition, our application provides you
              with the best tools to track your drivers and
              monitor their performance, as well as gives you other useful business features.
            </p>
            <LinkButton id="for-business" text="Learn More" />

          </div>

        </section>

        <section id="for-business" className="bg-white py-24 mb-24">
          <div className="container">
            <h1 className="text-center mb-16">Benefits For You</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2
            gap-24 justify-center">
              <div className="lg:justify-self-end">
                <CardFlip
                  background="bg-card"
                  imageData={ConversionSprite}
                  title="Higher conversion"
                  description="Get higher conversion
                  with better customer experience."
                  backDescription="Get higher conversion for your business.
                  With our product, you can enlarge your customer already after one
                  month. Our unique UX (User Experience) will increase your brand awareness and
                  boost customer satisfaction."
                />
              </div>
              <div className="lg:justify-self-start">
                <CardFlip
                  background="bg-card"
                  imageData={GpsSprite}
                  title="Tracking"
                  description="Get real-time data on location
                  of your employees."
                  backDescription="Know where your employees are and what orders they have any second. In addition, our application will give you reports on the efficiency and overall results of your taxi drivers, so that you have a clear picture of your business."
                />
              </div>
              <div className="lg:justify-self-end">
                <CardFlip
                  background="bg-card"
                  imageData={ApplicationSprite}
                  title="Application"
                  description="Mobile app for all
                  of your drivers."
                  backDescription="With our unique UX, improved features,
                  and data-driven insights, we can help you
                  achieve higher conversion rates and bring your business to another level.
                  Plus, with our proven track record of success,
                  you can start seeing results in as little as one month.
                  Join our platform today and start taking your business
                  to the next level." />
              </div>
              <div className="lg:justify-self-start">
                <CardFlip
                  background="bg-card"
                  imageData={AnalyticsSprite}
                  title="Accountancy"
                  description="Finance management is now much easier
                  with our integrated tool."
                  backDescription="Our solution streamlines financial reporting,
                  providing a fully automated process that maximizes accuracy
                  and reliability. Discover how our tool can simplify your
                  financial management needs and provide
                  you with peace of mind."
                />
              </div>
            </div>
          </div>
        </section>

        {/* For customers section */}
        <section id="for-customers" className="mb-48">
          <div className="container text-center">
            <h1 className="mb-16">Benefits For Your Customers</h1>

            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col items-center
       text-center px-7 pb-12 pt-3 basis-1/3">
                <Image src={SplitBill} alt="Split the Bill img" height={300} />
                <h2 className="mb-5 mt-4">Split the bill</h2>
                <p className="text-xl">Get a cheaper ride with us.
                Customers will be able to share a travel with their friends and pay separately.</p>
              </div>

              <div className="flex flex-col items-center
       text-center px-7 pb-12 pt-3 basis-1/3">
                <Image src={ChooseDriver} alt="Drivers img" height={300} />
                <h2 className="mb-5 mt-4">Choose your driver</h2>
                <p className="text-xl">No more automatically assigned drivers.
                Customers will get rating and the car of each driver
                and make their own decision who to choose. </p>
              </div>

              <div className="flex flex-col items-center
       text-center px-7 pb-12 pt-3 basis-1/3">
                <Image src={AppCustomer} alt="App customer img" height={300} />
                <h2 className="mb-5 mt-4">Get Updates</h2>
                <p className="text-xl">Get the most recent updates
                on the travel. Customer's time is our priority. </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us section */}
        <section id="about" className="container mb-24">
          <div
            className="bg-showcase w-full
            lg:h-[540px] flex justify-between rounded-4xl">
            <Image src={AboutUsImg} alt="About img" className="hidden lg:block" />

            <div className="text-center lg:text-right lg:basis-1/2 p-6 lg:p-14 my-auto">
              <h1 className="text-showcase mb-10">About us</h1>
              <p className="text-xl text-showcase">
                At Split, we are committed to revolutionizing
                the taxi industry by providing cutting-edge solutions
                that streamline operations, enhance the customer
                experience, and drive growth. Our mission is to
                empower taxi companies to embrace the digital age
                and thrive in a highly competitive market.
              </p>
              <LinkButton id="contact" text="Contact Us" />
            </div>

          </div>
        </section>

        {/* Contact Us section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container">
            <h1 className="mb-4">
              Want to implement our solution in your business?
            </h1>
            <p className=" text-2xl lg:text-[2rem] font-normal mb-14">
              Fill out the form about your company and
              we will reach to you as soon as possible.
            </p>

            <form action="https://formsubmit.co/partnership@splitaxi.com" method="POST">
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://https://split-landing-phi.vercel.app" />

              <div className="grid lg:grid-cols-2 gap-y-11">
                <div>
                  <label className="text-main font-light text-xl lg:text-2xl mr-6">
                    Name of your company:
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    className="border-b focus:outline-none focus:border-b-2 text-main" />
                </div>
                <div>
                  <label className="text-main font-light text-xl lg:text-2xl mr-6">
                    Your city:
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="border-b focus:outline-none focus:border-b-2 text-main" />
                </div>
                <div>
                  <label className="text-main font-light text-xl lg:text-2xl mr-6">
                    Number of employees:
                  </label>
                  <input
                    type="number"
                    name="number_of_employees"
                    className="border-b focus:outline-none focus:border-b-2 text-main" />
                </div>
                <div>
                  <label className="text-main font-light text-xl lg:text-2xl mr-6">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-b focus:outline-none focus:border-b-2 text-main" />
                </div>
                <div>
                  <label className="text-main font-light text-xl lg:text-2xl mr-6">
                    Phone number (optional):
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    className="border-b focus:outline-none focus:border-b-2 text-main" />
                </div>
              </div>
              <button
                className="btn btn-md btn-primary rounded-full
                      capitalize text-xl lg:text-2xl mt-16 px-12"
                type="submit"
                onClick={() => setSuccess(true)}
              >
                Send
              </button>
            </form>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
