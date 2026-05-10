import styles from './Dashboard.module.css';

function PriceTrendChart({ labels, values }) {
  const width = 720;
  const height = 210;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(' ');

  const areaPath = `M0,${height} L${points} L${width},${height} Z`;

  return (
    <div className={styles.chartWrapper}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.chart}>
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(49, 119, 115, 0.24)" />
            <stop offset="100%" stopColor="rgba(49, 119, 115, 0)" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#trendGradient)" />
        <polyline points={points} fill="none" stroke="#164d46" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <div className={styles.axisLabels}>
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export default PriceTrendChart;
