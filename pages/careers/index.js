import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";
import Divider from '@mui/material/Divider';
import { useState } from 'react';

const careerQuery = `*[_type == "career"] | order(career, asc){
    _id,
    position,
    slug,
    description,
    publishedAt,
    mainImg,
  }`;

  const CareersPage = ({ careers }) => {
    const [expandedCareers, setExpandedCareers] = useState([]);

    const handleReadMore = (id) => {
      if (expandedCareers.includes(id)) {
        setExpandedCareers(expandedCareers.filter(careerId => careerId !== id));
      } else {
        setExpandedCareers([id]);
      }
    };

  return (
    <>
     <Loading />
     <motion.div
      variants={fadeInOut}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[80vh] z-0"
     >
      <div className="relative flex justify-center items-center flex-col"> 
          <h2 className="lg:mb-8 mb-4 text-base space-x-2 text-center lg:text-left">
            <Link scroll={false} href="/">
              Home
            </Link>
            <span> &gt; </span>
            <span className="font-bold text-primary"> Careers</span>
          </h2>
          <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
            <div className="inline-block relative">
              Join
            </div>{" "}
            <div className="inline-block relative">
              Our Team!
            </div>
          </h1>
        </div>
        <p className="text-center text-sm w-full text-[#4C5249]">
          Deserunt reprehenderit enim labore id et labore culpa excepteur
          occaecat aliqua. Est ea cupidatat minim proident commodo sint amet
          duis deserunt aliqua cillum.Consectetur ullamco laborum et ad
          adipisicing.
        </p>
        <br/>
        <Divider sx={{ bgcolor: "gray" }} variant='middle' flexItem/>
        <p className="text-left w-full text-[#4C5249] text-xl mx-20">Open Positions:</p>
        <br/>
      <div className='ctn flex flex-wrap mb-12 items-start text-primary'>
          {careers.map((career) => (
              <div key={career._id} className="flex flex-col items-start w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="flex flex-col justify-start min-[200px]:max-[780px]:w-[500px]"> 
                      <Image
                          alt=""
                          src={urlFor(career.mainImg).url()}
                          className="z-10 rounded-2xl self-start"
                              placeholder="blur"
                          blurDataURL={urlFor(career.mainImg).url()}
                          layout="responsive"
                          width={500}
                          height={300}
                          sizes="25vw"
                          style={{
                          objectFit: "cover"
                          }} 
                      />
                      <div>
                          <h1 className='text-2xl mt-4'>{career.position}</h1>
                          <p className='text-lg text-[#4C5249]'>
                            {expandedCareers.includes(career._id) ? career.description : `${career.description.substring(0, 100)}...`}
                            <button onClick={() => handleReadMore(career._id)} className='text-primary'>
                              {expandedCareers.includes(career._id) ? 'Read Less' : 'Read More'}
                            </button>
                          </p>
                          <p className='text-lg text-center mt-8 text-[#4C5249]'>Interested?</p>
                          <div className="relative ctn flex flex-col items-center">
                            <Link scroll={false} href="/contact" passHref>
                               <div>
                                <p className="btn2 text-md lg:text-base min-[200px]:w-[100%] cursor-pointer text-center min-[1500px]:p-0 p-2">
                                  Email us your resume!
                                </p>
                               </div>
                            </Link>
                          </div> 
                      </div>
                    </div>    
              </div>
            ))}
         </div>
         <div className="pointer-events-none">
            <Image
              src="/grass-bg-1.png"
              alt=""
              className="opacity-30 -mt-16"
              layout="fill"
              sizes="100vw"
              style={{
                objectFit: 'contain',
              }} 
              />
          </div>
     </motion.div>  
    </>    
  )
};

export const getStaticProps = async () => {
    const careers = await sanityClient.fetch(careerQuery);
    return { props: { careers } };
  };

export default CareersPage