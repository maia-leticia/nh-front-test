interface FeaturedArticleProps {
  article: {
    image: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
  };
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <div>
      <div className="w-full h-[300px] bg-[linear-gradient(135deg,#059669_0%,#10b981_100%)] flex justify-center items-center">
        <span className="text-9xl grayscale">{article.image}</span>
      </div>
      <div className='p-4'>
        <h2 className="md:text-2xl text-xl font-bold text-[#1f2937] mt-2 mr-2 mb-1 leading-[1.3]">{article.title}</h2>
        <p className="text-sm text-[#6b7280] mr-2 mb-1">
          {article.author} / {article.date}
        </p>
        <p className="text-[15px] text-[#4b5563] leading-[1.6] mr-2 mb-2">{article.excerpt}</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;
