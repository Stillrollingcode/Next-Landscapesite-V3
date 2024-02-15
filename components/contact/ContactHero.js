import Link from "next/link";

const ContactHero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:mt-8 gap-6 mb-6 lg:min-h-[20vh] items-start">
        <div className="flex flex-col gap-6 my-3 justify-start items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
              <Link scroll={false} href="/">
                Home
              </Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> Contact</span>
            </h2>
            <h1 className=" font-bold text-5xl lg:text-6xl text-primary text-center lg:text-left lg:mb-4">
              <div className="inline-block relative">
                Contact
              </div>
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm w-full text-secondary">
            Ipsum cillum eu velit commodo non quis sint esse. Non do ea ipsum
            non dolor. Pariatur aliquip sunt culpa quis non ipsum adipisicing
            occaecat id nisi irure.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
