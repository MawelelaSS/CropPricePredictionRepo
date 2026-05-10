import styles from './MarketOverview.module.css';

function MarketOverview({ marketData, trendsData }) {
  return (
    <div className={styles.marketOverview}>
      <div className={styles.summary}>
        <h2>Market overview</h2>
        <p>Track key crop market indicators and price signals for more reliable decisions.</p>
        <div className={styles.metrics}>
          {marketData.map((item) => (
            <article key={item.title} className={styles.metricCard}>
              <p className={styles.metricTitle}>{item.title}</p>
              <strong>{item.value}</strong>
              <span className={item.status === 'up' ? styles.up : styles.down}>{item.change}%</span>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.trends}>
        <h3>Trend summary</h3>
        <div className={styles.trendList}>
          {trendsData.map((trend) => (
            <div key={trend.title} className={styles.trendItem}>
              <strong>{trend.value}</strong>
              <p>{trend.title}</p>
              <small>{trend.description}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketOverview;
