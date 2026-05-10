import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}> 
      <div className={styles.heroContent}>
        <span className={styles.intro}>Predict smarter crop pricing</span>
        <h1>Crop market insights delivered for farmers and traders.</h1>
        <p>
          Explore predictive pricing, supply trends, and crop strength at a glance.
          Turn market signals into better planting and selling decisions.
        </p>
      </div>
    </section>
  );
}

export default Hero;
