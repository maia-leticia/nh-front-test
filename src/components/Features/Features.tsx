import FeatureCard from './FeatureCard.tsx';
import FeatureIlustration from './FeatureIlustration.tsx';

const Features = () => {
  const features = [
    {
      icon: '💡',
      title: 'OBTENHA INSIGHTS ÚNICOS',
      description: "Obtenha insights únicos sobre o futuro da tecnologia. Conteúdos direto de quem realmente vive o mercado."
    },
    {
      icon: '⏰',
      title: 'ECONOMIZE TEMPO E ESFORÇO',
      description: "Poupe horas de pesquisa com análises já mastigadas. Aproveite conteúdos pensados para acelerar suas decisões."
    },
    {
      icon: '🧠',
      title: 'APROVEITE ESTAR INFORMADO',
      description: "Mantenha-se sempre um passo à frente com informação de qualidade. Use cada insight para evoluir no seu próprio ritmo."
    }
  ];

  return (
    <section className="md:py-2 py-4  bg-gray-100">
      <section className="max-w-7xl m-auto px-8 gap-3 grid grid-cols-1 lg:grid-cols-2 md:px-4">
        <FeatureIlustration/>
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
