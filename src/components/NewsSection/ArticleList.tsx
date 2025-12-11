interface Article {
  title: string;
  subtitle: string;
  author: string;
  date: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <section className="flex flex-col gap-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
          <h3 className="md:text-[18px] text-base font-bold text-[#1f2937] mb-2 leading-[1.4]">{article.title}</h3>
          <h4 className="text-[14px] text-[#6b7280] leading-6 mb-3">{article.subtitle}</h4>
          <p className="text-[13px] text-[#9ca3af]">
            {article.author} / {article.date}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ArticleList;
