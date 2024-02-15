const ServiceCard = ({ Icon, title, paragraph }) => {
  return (
    <div className="flex flex-col justify-center lg:items-center lg:text-center lg:first:mt-0 lg:last:mb-0 first:mt-6 last:mb-6 py-4 px-6 border-4 border-primary_light rounded-2xl gap-2 lg:py-6 lg:min-h-[300px] bg-white shadow-lg">
      <div>
        <Icon className="text-7xl overflow-visible p-3 rounded-full  bg-neutral_var text-primary" />
      </div>
      <h2 className="font-bold text-2xl text-primary">{title}</h2>
      <p className="text-sm">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
