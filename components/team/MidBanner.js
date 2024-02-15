import Image from "next/image";

const Quote = () => {
  return (
    <div className="py-20 bg-[url('/weed-eating.jpg')] bg-cover bg-opacity-60 mb-[85px] lg:min-h-[20vh]">
      <div className="ctn">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-10">
            <h2 className="font-bold text-4xl lg:text-4xl text-center lg:text-left mb-5 text-primary">
              Our Team
            </h2>
            <h3 className="font-bold text-2xl lg:text-2xl text-center lg:text-left mb-5 text-[#4C5249]">
              Our dynamic team ensures our clients get top notch service, everytime.
            </h3>
          </div>
          <div className="px-10 text-center lg:text-left">
            <p className="text-[#4C5249]">
            Meet the people behind our commitment to excellence,
            and discover the heart of our Southwest Virginia landscaping company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
