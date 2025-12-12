import TestimonialCard from './TestimonialCard.tsx';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Eu recomendo de coração 'tecnologia emergente' para qualquer pessoa que busca uma fonte confiável, amigável e abrangente para startups atualizadas sobre o que há de mais recente no mundo tech.",
      author: "Mariana"
    },
    {
      quote: "tecnologia emergente é o sonho de um entusiasta realizado. É sua bússola para navegar o mundo em constante evolução da tecnologia. Aqui no blockchain, cobre tudo com profundidade e clareza.",
      author: "Lucas B."
    },
    {
      quote: "se você está procurando uma fonte sustentável de insights tecnológicos, não procure mais do que 'tecnologia emergente'. Esta newsletter entrega consistentemente notícias e análises de ponta de uma forma acessível a todos.",
      author: "Fernanda"
    }
  ];

  return (
    <section className=" py-15 bg-white flex flex-col justify-center items-center">
      <section className="max-w-7xl  px-4 md:px-8 flex flex-col justify-center items-center">
        <h2 className="md:text-[32px] text-2xl  font-bold text-black text-center  mb-8 ">OUÇA DE QUEM JÁ ASSINOU!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 max-w-[1100px] m-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
