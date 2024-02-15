import ProjectHero from "../../components/projects/ProjectHero";
import ProjectCardList from "../../components/projects/ProjectCardList";
import { sanityClient } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from 'react-redux';

const serviceQuery = `*[_type == "service"] | order(service, asc){
  _id,
  service,
  slug,
  description,
  serviceImg,
  avgCost,
  category,
}`;

const Services= ({ services }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.service.filterValue);
  const categories = services.map(service => service.category);
  const filteredServices = filter ? services.filter(service => service.category === filter) : services;
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
          <ProjectHero categories={categories} />
          <ProjectCardList services={filteredServices} />
        </div>
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const services = await sanityClient.fetch(serviceQuery);
  return { props: { services }, revalidate: 60 };
};

export default Services;
