interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <figure className="bg-[#f3f4f6] border border-[#d0d1d4] rounded-xl p-4 flex flex-col justify-between transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <blockquote className='text-sm text-[#4b5563] leading-[1.7] mb-6 italic'>{quote}</blockquote>
      <figcaption className="text-[16px] font-semibold text-[#1f2937] text-right">
        <cite className="not-italic">{author}</cite>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
