import FeaturedArticle from './FeaturedArticle.tsx';
import ArticleList from './ArticleList.tsx';
const NewsSection = () => {
  const featuredArticle = {
    image: '🧠',
    title: 'NeuralAI Lab - Melhorando a Interpretabilidade da IA em Imagens Médicas',
    author: 'Dr. Pedro Silva',
    date: '24 de Abril de 2024',
    excerpt: 'NeuralAI Lab desenvolve métodos avançados para tornar modelos de IA mais transparentes em diagnósticos por imagem, revelando como a IA toma decisões e ajudando médicos a confiar mais nos resultados. O foco é unir precisão algorítmica e interpretabilidade para melhorar a segurança e a eficácia clínica.'
  };

  const articles = [
    {
      title: 'IA como Ponte de Aprendizado: Navegando o Dia a Dia da Codificação à Engenharia de Software',
      subtitle: 'A IA atua como uma ponte de aprendizado contínuo, ajudando desenvolvedores a evoluir da simples codificação para a engenharia de software completa. Ela agiliza o entendimento de conceitos complexos, acelera a resolução de problemas e orienta boas práticas. Com isso, o aprendizado diário se torna mais eficiente, estruturado e guiado.',
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
    <section className=" py-10 " id="article">
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-h-[600px] mb-5">
          <FeaturedArticle article={featuredArticle} />
        </section>
        <section className="flex flex-col gap-6">
          <ArticleList articles={articles} />
        </section>
      </section>
    </section>
  );
};

export default NewsSection;
