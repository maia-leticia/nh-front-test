import HeroText from './HeroText';
import HeroForm from './HeroForm';
import HeroStats from './HeroStats';
import HeroIlustration from './HeroIlustration';
import HeroList from './HeroList';

const Hero = () => {

  const logoItens = ["NovaTech Solutions", "CyberSphere Global", "Quantum Dynamics", "CatherStark", "McKinsey & Company"]

  return (
    <section className="pt-8 pb-2 flex justify-center ">
      <section className="max-w-7xl m-auto px-8 h-[600px]">
        <section className="grid grid-cols-1 gap-4 items-center mb-12 lg:grid-cols-2">
          <section className="flex flex-col gap-4 order-2 lg:order-1">
            <HeroText />
            <HeroForm />
            <HeroStats />
          </section>
          <HeroIlustration />
        </section>
        <HeroList items={logoItens} />
      </section>
    </section>
  );
};

export default Hero;
