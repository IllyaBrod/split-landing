const Footer = () => {
  return (
    <footer className="bg-showcase py-8">
      <div className="container mx-auto">
        <p className="text-4xl text-white mb-8">Split</p>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-white">
              &copy; 2023 Split. All rights reserved.
            </p>
          </div>
          <div
            className="w-full md:w-auto text-center md:text-right flex gap-4">
            <a className="text-white hover:text-gray-400" href="#digitalize">
              Digitalize Business
            </a>
            <a className="text-white hover:text-gray-400" href="#for-business">
              For Business
            </a>
            <a className="text-white hover:text-gray-400" href="#for-customers">
              For Customers
            </a>
            <a className="text-white hover:text-gray-400" href="#about">
              About Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
