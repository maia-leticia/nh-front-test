interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <section className="flex gap-2 p-2 bg-white rounded-xl max-w-[550px] transition-[transform,box-shadow] duration-200 
    hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:flex-row flex-col md:text-start text-center items-center">
      <figure className="shrink-0 w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center shadow">
        <span className="text-4xl">{icon}</span>
      </figure>
      <section className="flex flex-col">
        <h3 className="text-[18px] font-bold mb-2 ">{title}</h3>
        <p className="text-[14px] text-[#6b7280] leading-[1.6]">{description}</p>
      </section>
    </section>
  );
};

export default FeatureCard;
