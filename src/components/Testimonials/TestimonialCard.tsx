import styles from './Testimonials.module.css';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className={styles.testimonialCard}>
      <span className={styles.quote}>{quote}</span>
      <span className={styles.author}>{author}</span>
    </div>
  );
};

export default TestimonialCard;
