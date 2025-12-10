import styles from './SubscriptionForm.module.css';

interface SubscriptionFormProps {
  variant?: 'blue' | 'map';
}

const SubscriptionForm = ({ variant = 'blue' }: SubscriptionFormProps) => {
  return (
    <div className={`${styles.subscription} ${variant === 'map' ? styles.mapVariant : styles.blueVariant}`}>
      <div className={styles.container}>
        <span className={styles.title}>
          FIQUE POR DENTRO DO SEU MUNDO<br />
          DE DENTRO DA SUA CAIXA DE ENTRADA
        </span>
        <span className={styles.subtitle}>Assine gratuitamente hoje</span>
        <div className={styles.formWrapper}>
          <input
            type="email"
            className={styles.emailInput}
          />
          <div className={styles.subscribeButton}>ASSINAR</div>
        </div>
        <span className={styles.disclaimer}>
          SEM SPAM, SEM RUÍDO, CANCELE A QUALQUER MOMENTO
        </span>
      </div>
    </div>
  );
};

export default SubscriptionForm;
