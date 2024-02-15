import FeatureCard from "./FeatureCard";

const FeatureCardList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {services.map((service, index) => (
        <FeatureCard service={service} key={service._key} />
      ))}
    </div>
  );
};

export default FeatureCardList;
