import styles from './CropCards.module.css';
import { formatCurrency } from '../../utils.js';

function CropCards({ crops }) {
  return (
    <div className={styles.cropCards}>
      <h2>Crop performance</h2>
      <div className={styles.cardsGrid}>
        {crops.map((crop) => (
          <article key={crop.name} className={styles.card}>
            <strong>{crop.name}</strong>
            <p>{crop.region}</p>
            <span>{formatCurrency(crop.currentPrice)}</span>
            <small>{crop.demandTrend} demand</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CropCards;
