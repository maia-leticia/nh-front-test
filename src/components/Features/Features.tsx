import FeatureCard from './FeatureCard.tsx';

const Features = () => {
  const features = [
    {
      icon: '💡',
      title: 'OBTENHA INSIGHTS ÚNICOS',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    },
    {
      icon: '⏰',
      title: 'ECONOMIZE TEMPO E ESFORÇO',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    },
    {
      icon: '🧠',
      title: 'APROVEITE ESTAR INFORMADO',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    }
  ];

  return (
    <section className="md:py-2 py-4  bg-gray-100">
      <section className="max-w-7xl m-auto px-8 gap-3 grid grid-cols-1 lg:grid-cols-2 md:px-4">
        <figure className="flex items-center justify-center -order-1">
          <div className="w-full max-w-[400px] relative">
            <div className="bg-[linear-gradient(135deg,#ec4899_0%,#f43f5e_50%,#ef4444_100%)] rounded-4xl py-16 px-8 flex items-center justify-center shadow-2xl shadow-[#00000017] relative 
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 mb-5 ">
              <span className="md:text-9xl drop-shadow-xl text-8xl">🏢</span>
            </div>
            <figcaption className="absolute left-90 top-45 bg-white rounded-full w-[60px] h-[60px] text-3xl md:w-20 md:h-20 flex justify-center items-center md:text-4xl shadow-lg">⚛️</figcaption>
          </div>
        </figure>
        <section className="flex flex-col gap-8 min-h-[400px] justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Features;
