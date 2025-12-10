import FeaturedArticle from './FeaturedArticle.tsx';
import ArticleList from './ArticleList.tsx';
import styles from './NewsSection.module.css';

const NewsSection = () => {
  const featuredArticle = {
    image: '🧠',
    title: 'NeuralAI Lab - Melhorando a Interpretabilidade da IA em Imagens Médicas',
    author: 'Dr. Pedro Silva',
    date: '24 de Abril de 2024',
    excerpt: 'A principal barreira para IA na saúde é o problema da "Caixa Preta". Para a maioria dos sistemas de IA, é difícil interpretar o modelo e entender por que eles fazem um determinado diagnóstico ou recomendações...'
  };

  const articles = [
    {
      title: 'IA como Ponte de Aprendizado: Navegando o Dia a Dia da Codificação à Engenharia de Software',
      subtitle: 'A principal barreira para IA na saúde é o problema da "Caixa Preta". Para a maioria dos sistemas de IA, é difícil interpretar o modelo e entender por que eles fazem um determinado diagnóstico ou recomendações...',
      author: 'Hemilio Lu',
      date: '24 - Abril - 2024'
    },
    {
      title: 'Leis que Previnem a Mudança Tecnológica da Engenharia em 2023',
      subtitle: 'Com as melhorias revolucionárias no aprendizado de máquina nos últimos anos, há uma renovação nas condições para promover uma mentalidade surpreendentemente ideal.',
      author: 'ARGle',
      date: '30 - Agosto - 2024'
    },
    {
      title: 'Novos Projetos Incríveis de Neurotecnologia e Tudo sobre o Futuro de Miche Ribuk',
      subtitle: 'A IA tem sido o órgão mais poderoso e complexo do corpo. A Neurotecnologia é um novo campo focado em entender, mapear e manipular essas interpretações e fluxos de energia.',
      author: 'Daniela Mengo',
      date: '4 - Setembro - 2024'
    },
    {
      title: 'Tina Perme Cruza Longe do Conteúdo Ex-Economista Para Mim IA como Instância Única',
      subtitle: 'É a corrida de ver como prioridade e globalização. Uma das minhas partes favoritas dos novos empregos em Intellutions.',
      author: 'Phillipe S',
      date: '1 - Novembro - 2024'
    }
  ];

  return (
    <div className={styles.newsSection} id="article">
      <div className={styles.container}>
        <div className={styles.featuredColumn}>
          <FeaturedArticle article={featuredArticle} />
        </div>
        <div className={styles.listColumn}>
          <ArticleList articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
