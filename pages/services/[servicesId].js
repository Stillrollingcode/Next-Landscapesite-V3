import Link from "next/link";
import InnerHero from "../../components/projects_inner/InnerHero";
import { sanityClient } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";

const singleServiceQuery = `*[_type == "service" && slug.current == $servicesId ][0]{
  _id,
  service,
  slug,
  description,
  serviceImg,
  avgCost,
  reasons,
  category,
}`;

const Services = ({ singleService }) => {
  return (
    <>
      <Loading />
      <motion.div
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {singleService && (
          <>
            <div className="relative ctn flex flex-col items-center">
              <InnerHero services={singleService} />
              <Link scroll={false} href="/contact" passHref>
                <p className="btn2 text-md lg:text-base min-[200px]:w-[100%] p-8 mb-16 -mt-16 cursor-pointer text-center content-center">
                  Click for a free quote
                </p>
              </Link>
            </div>          
              <div className="flex items-center justify-center flex-row min-[200px]:max-[1023px]:flex-col gap-8 lg:gap-20 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
                <Link scroll={false} href="/services" passHref>
                  <p className="btn text-md lg:text-base w-full min-[200px]:w-[100%] p-8 cursor-pointer text-center content-center">
                    Back to Services
                  </p>
                </Link>
                <Link scroll={false} href="/" passHref>
                  <p className="btn text-md lg:text-base w-full min-[200px]:w-[100%] p-8 cursor-pointer text-center content-center">
                    Back to Homepage
                  </p>
                </Link>
              </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type == "service" && defined(slug.current)]{
    "params":{
      "servicesId": slug.current
    }
  }`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { servicesId } = params;
  const singleService = await sanityClient.fetch(singleServiceQuery, {
    servicesId,
  });
  return { props: { singleService }, revalidate: 60 };
};

export default Services;
