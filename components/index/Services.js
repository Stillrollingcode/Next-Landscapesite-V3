import ServiceCard from "./ServiceCard";
import { BiPen, BiTestTube, BiBarChartAlt2, BiCalendar } from "react-icons/bi";
import { motion  } from "framer-motion";
import { GiHighGrass, GiFallingLeaf } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";
import { FaRegSnowflake } from "react-icons/fa";
import Link from 'next/link';


const Cards = [
  {
    icon: GiHighGrass,
    title: "Mowing & Weedeating",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: GiFallingLeaf,
    title: "Fall & Spring Clean Up",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: LuTrees,
    title: "Tree & Shrub Care",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: FaRegSnowflake,
    title: "Snow Removal",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="subtitle text-center text-3xl lg:text-4xl">
        Check out some of our most popular services!
      </h1>
      <div className="flex flex-col lg:flex-row gap:3 lg:gap-5 lg:mt-10 lg:mb-10">
       
        {Cards.map((card, index) => (
           <motion.div
           key={index}
           whileHover={{ scale: 1.1, rotate: 1 }}
           whileTap={{
             scale: 0.7,
             rotate: -1,
             className:'bg-white'
           }}
           >
              <Link href="/services" passHref className="cursor-pointer">
              <ServiceCard
                key={card.title.replace(/\s+/g, "")}
                Icon={card.icon}
                title={card.title}
                paragraph={card.paragraph}
              />
             </Link>
          </motion.div>  
        ))}
      </div>
    </div>
  );
};

export default Services;
