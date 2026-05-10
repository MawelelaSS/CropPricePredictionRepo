import styles from './Analytics.module.css';

function Analytics({ trendsData }) {
  return (
    <div className={styles.analytics}>
      <h2>Market analytics</h2>
      <p>Use these starting points to compare crop signals, seasonal demand, and pricing.
      </p>
      <div className={styles.grid}>
        {trendsData.map((item) => (
          <div key={item.title} className={styles.card}>
            <strong>{item.value}</strong>
            <p>{item.title}</p>
            <small>{item.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
