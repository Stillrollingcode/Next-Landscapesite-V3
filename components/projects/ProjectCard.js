import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";

const ProjectCard = ({ service }) => {
  return <>
    <Link scroll={false} href={`/services/${service?.slug?.current || ''}`} passHref>
      <div className="relative flex flex-col justify-between items-center hover:-translate-y-2 ani cursor-pointer mb-20 group">
        <div className="relative min-h-[300px] w-full rounded-xl overflow-hidden lg:min-h-[300px]">
          <Image
            src={urlFor(service.serviceImg).url()}
            quality={100}
            placeholder="blur"
            blurDataURL={urlFor(service.serviceImg).url()}
            className="group-hover:scale-105 ani"
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <div className="absolute bottom-[-60px] mr-16 p-4 min-[200px]:max-[640px]:mr-0 mt-[-50px] bg-neutral rounded-xl shadow-lg z-10 w-[80%]">
          <h3 className="font-bold text-2xl text-center text-primary mb-1 flex justify-center">
            {service.service}
          </h3>
          {/* <p className="text-sm line-clamp-1 flex justify-center text-[#4C5249]">{service.description}</p> */}
        </div>
      </div>
    </Link>
  </>;
};

export default ProjectCard;
