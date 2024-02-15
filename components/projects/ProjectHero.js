import Link from "next/link";
import Image from "next/image";
import { setFilter } from "../../lib/reducers/serviceSlice";
import { useDispatch, useSelector } from "react-redux";

const ProjectHero = ({ categories }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return <>
    <div className="grid grid-cols-1 lg:mt-8 lg:mb-[40px] mb-[40px] lg:gap-6 lg:min-h-[25vh] items-center">
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
      <div className="flex flex-col lg:gap-6 gap-4 my-3 justify-center items-center lg:items-start lg:pr-40">
        <div className="relative">
          <h2 className="lg:mb-8 mb-4 text-base space-x-2 text-center lg:text-left">
            <Link scroll={false} href="/">
              Home
            </Link>
            <span> &gt; </span>
            <span className="font-bold text-primary"> Services</span>
          </h2>
          <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
            <div className="inline-block relative">
              Our
            </div>{" "}
            <div className="inline-block relative">
              Services
            </div>
          </h1>
        </div>
        <p className="text-center lg:text-left text-sm lg:w-3/4 w-full text-[#4C5249]">
          Deserunt reprehenderit enim labore id et labore culpa excepteur
          occaecat aliqua. Est ea cupidatat minim proident commodo sint amet
          duis deserunt aliqua cillum.Consectetur ullamco laborum et ad
          adipisicing.
        </p>
        <div className="flex flex-wrap justify-center lg:gap-4 gap-2 mt-2">
          <button
            className="btn text-lg px-6"
            onClick={() => {
              dispatch(setFilter(""));
            }}
          >
            All
          </button>
          {categories?.filter((category, index, self) => self.indexOf(category) === index).map((category) => (
            <button
              className={`btn text-lg px-6 ${
                category === filter && "bg-primary text-neutral"
              }`}
              key={category}
              onClick={() => {
                dispatch(setFilter(category));
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  </>;
};

export default ProjectHero;
