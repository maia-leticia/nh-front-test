import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <span className={styles.headline}>
              Tecnologia Emergente: Explorando as Fronteiras da Inovação e Possibilidade.
            </span>
            <span className={styles.description}>
              Deseja notícias e análises de tecnologia sem jargões de todo o mundo? Você está com sorte! Receba nosso boletim informativo de 5 minutos projetado por ex-especialistas da indústria para ser a pessoa mais informada da sala.
            </span>
            <div className={styles.subscriptionBox}>
              <input 
                type="email" 
                className={styles.emailInput}
              />
              <div className={styles.subscribeButton}>ASSINAR</div>
            </div>
            <div className={styles.stats}>
              <div className={styles.statBadge}>
                <div className={styles.badgeIcon}>
                  <span>📧</span>
                </div>
                <div className={styles.badgeText}>
                  <span>Fique</span>
                  <br />
                  <span>Informado</span>
                </div>
              </div>
              <div className={styles.statNumber}>
                <div className={styles.number}>25.000+</div>
                <div className={styles.label}>LEITORES</div>
                <div className={styles.sublabel}>Que começam o dia com Tecnologia Emergente</div>
              </div>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.illustration}>
              <div className={styles.robotImage}>
                <div className={styles.robotPlaceholder}>
                  <span className={styles.robotIcon}>🤖</span>
                </div>
                <div className={styles.techElements}>
                  <div className={styles.techCircle}></div>
                  <div className={styles.atomBadge}>⚛️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trustedBy}>
          <span className={styles.trustedText}>Confiado por profissionais em</span>
          <div className={styles.logos}>
            <span className={styles.logoItem}>NovaTech Solutions</span>
            <span className={styles.logoItem}>CyberSphere Global</span>
            <span className={styles.logoItem}>Quantum Dynamics</span>
            <span className={styles.logoItem}>CatherStark</span>
            <span className={styles.logoItem}>McKinsey & Company</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
