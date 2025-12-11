interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex gap-2 p-2 bg-white rounded-xl max-w-[550px] transition-[transform,box-shadow] duration-200 
    hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:flex-row flex-col md:text-start text-center md:items-start items-center">
      <div className="shrink-0 w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center shadow">
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[18px] font-bold mb-2 ">{title}</span>
        <span className="text-[14px] text-[#6b7280] leading-[1.6]">{description}</span>
      </div>
    </div>
  );
};

export default FeatureCard;
