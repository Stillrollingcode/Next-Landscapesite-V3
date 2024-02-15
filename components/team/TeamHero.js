import Image from "next/image";
import Link from "next/link";
import { LuTrees } from "react-icons/lu";

const TeamHero = () => {
  return <>
    <div className="grid grid-cols-2 lg:mt-8 mb-[105px] lg:mb-[0px] gap-6 lg:min-h-[700px] items-center">
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 lg:my-3 justify-center items-center lg:items-start lg:pr-40">
        <div className="relative">
          <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
            <Link scroll={false} href="/">
              Home
            </Link>
            <span> &gt; </span>
            <span className="font-bold text-primary"> About us</span>
          </h2>
          <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
            <div className="relative">
              Dedicated To Our Community.
            </div>
          </h1>
        </div>
        <p className="text-center lg:text-left text-sm text-[#4C5249]">
          serving the community we call home drives everything we do.
          Nestled in the heart of this picturesque region, we take immense pride in contributing to the beauty and charm of our neighborhoods.
          From rolling hills to quaint townships, we understand the unique character of Southwest Virginia, and it inspires us to create landscapes that seamlessly blend with the local environment.
          Our commitment goes beyond just business - it's a reflection of our love for this community and our desire to enhance the quality of life for our neighbors.
          <br />
          <br /> At New River Landscaping, we find joy in transforming residential and commercial properties into stunning outdoor spaces that leave a lasting impression.
          We believe that a well-designed landscape not only enhances the aesthetic appeal but also adds value to your investment.
          Whether it's a cozy backyard retreat or a welcoming entrance for your business, we are dedicated to bringing your vision to life.
        </p>
      </div>
      <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            alt=""
            src="/team-photo.jpg"
            className="z-10"
            placeholder="blur"
            blurDataURL="/group_photo_1.jpg"
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
        </div>
        <div className="absolute left-[-25px] bottom-[0px] z-10">
          <LuTrees className="text-6xl text-primary_light absolute -mt-10"/>
        </div>
      </div>
      <div className="pointer-events-none">
        <Image
          src="/curve.svg"
          alt=""
          className="opacity-50"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain"
          }} />
      </div>
    </div>
  </>;
};

export default TeamHero;
