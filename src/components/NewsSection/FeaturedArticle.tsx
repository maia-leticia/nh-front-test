import styles from './NewsSection.module.css';

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
    <div className={styles.featuredArticle}>
      <div className={styles.featuredImage}>
        <span className={styles.imageIcon}>{article.image}</span>
      </div>
      <span className={styles.featuredTitle}>{article.title}</span>
      <span className={styles.featuredMeta}>
        {article.author} / {article.date}
      </span>
      <span className={styles.featuredExcerpt}>{article.excerpt}</span>
    </div>
  );
};

export default FeaturedArticle;
