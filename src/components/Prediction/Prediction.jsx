import styles from './Prediction.module.css';
import { formatCurrency } from '../../utils.js';

function Prediction({ prediction }) {
  if (!prediction?.topPrediction) {
    return <div className={styles.prediction}>No prediction data available.</div>;
  }

  return (
    <div className={styles.prediction}>
      <div className={styles.cardHeader}>
        <h2>Top market prediction</h2>
        <span className={styles.tag}>Confidence {prediction.topPrediction.confidence}%</span>
      </div>
      <div className={styles.predictionBody}>
        <p className={styles.cropName}>{prediction.topPrediction.crop}</p>
        <strong className={styles.predictedPrice}>{formatCurrency(prediction.topPrediction.predictedPrice)}</strong>
        <p className={styles.trendText}>Projected trend: {prediction.topPrediction.trend}</p>
      </div>
      <ul className={styles.recommendations}>
        {prediction.allPredictions.slice(0, 3).map((item) => (
          <li key={item.crop}>
            <strong>{item.crop}</strong> — {formatCurrency(item.predictedPrice)} ({item.trend})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Prediction;
