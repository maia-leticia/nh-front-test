import FeatureCard from './FeatureCard.tsx';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: '💡',
      title: 'OBTENHA INSIGHTS ÚNICOS',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    },
    {
      icon: '⏰',
      title: 'ECONOMIZE TEMPO E ESFORÇO',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    },
    {
      icon: '🧠',
      title: 'APROVEITE ESTAR INFORMADO',
      description: "Estivemos nas salas onde as coisas acontecem e vamos te contar o que realmente está acontecendo e o que está por vir."
    }
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.buildingIllustration}>
            <div className={styles.buildingPlaceholder}>
              <span className={styles.buildingIcon}>🏢</span>
            </div>
            <div className={styles.atomBadge}>⚛️</div>
          </div>
        </div>
        <div className={styles.featureCards}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
