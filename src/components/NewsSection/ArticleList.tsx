import styles from './NewsSection.module.css';

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
    <div className={styles.articleList}>
      {articles.map((article, index) => (
        <div key={index} className={styles.articleItem}>
          <span className={styles.articleTitle}>{article.title}</span>
          <span className={styles.articleSubtitle}>{article.subtitle}</span>
          <span className={styles.articleMeta}>
            {article.author} / {article.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
