import HeroSection from "../components/index/HeroSection";
import Quote from "../components/index/Quote";
import Services from "../components/index/Services";
import { sanityClient } from "../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../lib/animations/fadeInOut";
import Loading from "../components/Loading";

export default function Home({ latestWorks }) {
  return (
    <>
      <Loading />
      <motion.div
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="ctn">
          <HeroSection />
          <Services />
        </div>
        <Quote />
      </motion.div>
    </>
  );
}

