import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import links from "../src/navLinks";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-primary h-[100%]"
        >
         <div className="relative h-full">
            <div className="lg:opacity-30 opacity-10">
              <Image
                src="/grass-bg-2.png"
                alt="Grass background"
                layout="fill"
                objectFit="cover"
                className="absolute z-10"
              /> 
            </div>  
          <div className="z-20 relative">
            <div className="ctn lg:px-20 flex flex-col lg:flex-row justify-between lg:items-center h-full gap-6 pt-10 pb-6 text-white">
                <div className="font-bold text-2xl flex-grow lg:ml-4">
                  <Image
                    src="/new-river-turf-white-txt.svg"
                    alt="Agenda Logo"
                    layout="fixed"
                    width={225}
                    height={225}
                    sizes="50vw"
                    style={{
                      objectFit: "contain"
                    }} 
                  />
                  <p className="text-sm mt-2 lg:block hidden font-normal">{`© ${new Date().getFullYear()} New River Landscaping Solutions. All rights reserved`}</p>
                  
                </div>
                <ul className="grid grid-cols-5 lg:grid-cols-1 lg:grid-rows-4 gap-1 flex-grow">
                  {links.map((link) => (
                    <li className="hover:text-secondary ani" key={link.title}>
                      <Link scroll={false} href={link.link}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className=" flex flex-col gap-1 lg:items-end">
                    <div className="flex text-2xl gap-6 mx-4">
                        <a href="https://www.facebook.com/NewRiverTurfPros" target="_blank">
                          <BsFacebook />
                        </a>
                    </div>
                    <p>
                      <a className="flex gap-2 items-center ml-4" href="tel:+85228904500">
                        <BsFillTelephoneFill />
                        +852 2890 4500
                      </a>  
                    </p>
                  <p>
                    <a className="flex gap-2 items-center" href="mailto:newriverturfsolutions@gmail.com">
                      <FiMail />
                      newriverturfsolutions@gmail.com
                    </a>  
                  </p>
                  
                  <p className="text-sm mt-2 lg:hidden">{`© ${new Date().getFullYear()} New River Landscaping Solutions. All rights reserved`}</p>
                </div>
              </div>
             </div>
            </div>  
        </motion.div>
    </>
  );
};

export default Footer;
