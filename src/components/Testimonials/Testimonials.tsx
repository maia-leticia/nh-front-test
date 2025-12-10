import TestimonialCard from './TestimonialCard.tsx';
import styles from './Testimonials.module.css';

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
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <span className={styles.title}>OUÇA DE QUEM JÁ ASSINOU!</span>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
