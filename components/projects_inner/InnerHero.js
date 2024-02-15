import Image from "next/image";
import Link from "next/link";
import { PortableText, urlFor } from "../../lib/sanity";
import Divider from '@mui/material/Divider';
import { LuTrees } from "react-icons/lu";

const InnerHero = ({ services }) => {
  return <>
    {services?.service ? (
      <h2 className="mb-8 text-base space-x-2 text-center lg:text-left lg:mt-8 mt-2 ">
        <Link href="/" className="hover:text-primary ani">
          Home
        </Link>
        <span> &gt; </span>
        <Link scroll={false} href="/services" className="hover:text-primary ani">
          Services
        </Link>
        <span> &gt; </span>
        <span className="font-bold text-primary">{services.service}</span>
      </h2>
    ) : (
      ""
    )}
    <div className="grid grid-cols-2 lg:mb-[85px] gap-24 lg:gap-12 min-h-[50vh] items-center">
      {services.serviceImg ? (
        <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1 ">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              alt=""
              src={urlFor(services.serviceImg).url()}
              className="z-10"
              placeholder="blur"
              blurDataURL={urlFor(services.serviceImg).url()}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          {/* Decorations */}
          <div className="absolute h-3/4 w-3/4 border-4 rounded-2xl border-primary left-[-30px] bottom-[-30px]"></div>
          <div className="absolute h-[90%] w-[100%] rounded-2xl bg-primary bg-opacity-10 left-[-20px] bottom-[-20px]"></div>
          <div className="absolute h-[90%] w-[90%] rounded-2xl bg-primary bg-opacity-30 right-[-20px] top-[-20px]"></div>
          <div className="absolute left-[-15px] bottom-[-15px] z-10">
          <LuTrees className="text-6xl text-primary_light"/>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 mb-20 lg:mb-0 justify-center items-center lg:items-start lg:pl-20">
        <div className="relative">
          {/* -------- Title -------- */}
          <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left mb-4">
            <span className="inline-block relative leading-[1.1]">
              {services.service}
            </span>
          </h1>
        </div>
        {/* -------- Inner Paragraph -------- */}
        <div className="text-center lg:text-left text-xl text-[#4C5249]">
          {services.description}
        </div>
        <Divider sx={{ bgcolor: "gray" }} variant='middle' flexItem/>
        <div className="text-center lg:text-left text-3xl text-[#4C5249]">
          <span>Reasons why we recommend &nbsp;{services.service}</span> 
        </div>
        <div className="text-center lg:text-left text-xl text-[#4C5249]">
         <PortableText blocks={services.reasons} />
        </div>
        <div>
          <p className="text-center text-[#4C5249] lg:text-left text-xl">Average cost around:&nbsp;{services.avgCost}</p>
        </div>
      </div>
    </div>
  </>;
};

export default InnerHero;
