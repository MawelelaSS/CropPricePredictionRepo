import { useState } from "react";
import { formatCurrency } from "../../utils.js";
import dashboardData from "../../data/dashboardData.json";
import PriceTrendChart from "./PriceTrendChart.jsx";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [crop, setCrop] = useState(dashboardData.selectedCrop);
  const [region, setRegion] = useState(dashboardData.selectedRegion);

  return (
    <div className={styles.dashboard}>
      {/* <header className={styles.headerBar}>
        <div>
          <div className={styles.brand}>{dashboardData.project.brand}</div>
          <div className={styles.subtitle}>
            {dashboardData.project.subtitle}
          </div>
        </div>
        <div className={styles.topActions}>
          <button className={styles.exportButton}>Export Report</button>
          <div className={styles.userBadge}>{dashboardData.project.user}</div>
        </div>
      </header> */}

{/* SELECTIONS FOR CROP AND REGION */}
      <div className={styles.filterRow}>
        <label className={styles.filterCard}>
          <span>Select Crop</span>
          <select
            value={crop}
            onChange={(event) => setCrop(event.target.value)}
          >
            <option>Maize</option>
            <option>Wheat</option>
            <option>Sugarcane</option>
            <option>Soybeans</option>
          </select>
        </label>
        <label className={styles.filterCard}>
          <span>Select Region</span>
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option>Gauteng</option>
            <option>Kwazulu-Natal</option>
            <option>Western Cape</option>
            <option>Mpumalanga</option>
          </select>
        </label>
      </div>


     {/*  CURRENT MARKET PRICE */}
      {/* <div className={styles.pricePanel}>
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.label}>Current Market Price</span>
            <h2>
              {formatCurrency(dashboardData.priceSummary.currentPrice, "ZAR")}
            </h2>
          </div>
          <div className={styles.badge}>Last updated</div>
        </div>
        <p className={styles.priceMeta}>
          {dashboardData.priceSummary.unitLabel} · {crop} · {region}
        </p>
        <div className={styles.priceFooter}>
          <span className={styles.priceChange}>
            +{dashboardData.priceSummary.change}%
          </span>
          <span>{dashboardData.priceSummary.lastUpdated}</span>
        </div>
      </div> */}
<div className={styles.pricePanel}>
  <div className={styles.priceTop}>
    
    <div className={styles.priceInfo}>
      <span className={styles.label}>
        Current Market Price
      </span>

      <div className={styles.priceRow}>
        <h2>
          {formatCurrency(
            dashboardData.priceSummary.currentPrice,
            "ZAR"
          )}
        </h2>

        <span className={styles.priceChange}>
          +{dashboardData.priceSummary.change}%
        </span>
      </div>

      <p className={styles.priceMeta}>
        {dashboardData.priceSummary.unitLabel}
        {" · "}
        {crop}
        {" · "}
        {region}
      </p>
    </div>

    <div className={styles.updateBox}>
      <span>Last Updated</span>
      <strong>
        {dashboardData.priceSummary.lastUpdated}
      </strong>
    </div>

  </div>
</div>

{/* MARKET TREND GRAPH AND WEATHER IMPACT */}
      <section className={styles.primaryGrid}>
        <div className={styles.chartCard}>
          <div className={styles.sectionTitle}>
            <span>Price Trend (Last 4 Months)</span>
            <small>Jan - May 2026</small>
          </div>
          <PriceTrendChart
            labels={dashboardData.trendGraph.labels}
            values={dashboardData.trendGraph.values}
          />
        </div>

        <div className={styles.weatherPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.label}>Weather Impact</span>
          </div>
          <div className={styles.weatherStats}>
            <div className={styles.weatherCard}>
              <span>Rainfall</span>
              <strong>{dashboardData.weatherImpact.rainfall}</strong>
              <small>Last 7 days</small>
            </div>
            <div className={styles.weatherCard}>
              <span>Temperature</span>
              <strong>{dashboardData.weatherImpact.temperature}</strong>
              <small>Average max temp</small>
            </div>
          </div>
          <div className={styles.weatherNote}>
            {dashboardData.weatherImpact.outlook}
          </div>
        </div>
      </section>


{/* AI PREDICTION AND SMART RECOMMENDATION */}
      <section className={styles.analyticsGrid}>
        <div className={styles.predictionCard}>
          <div className={styles.sectionTitle}>AI Price Prediction</div>
          <div className={styles.predictionHeader}>
            <strong>Price Direction (14 days)</strong>
            <span className={styles.directionPill}>UP</span>
          </div>
          <div className={styles.confidenceBar}>
            <span>Confidence Level</span>
            <div className={styles.confidenceTrack}>
              <div
                className={styles.confidenceFill}
                style={{ width: `${dashboardData.predictionCard.confidence}%` }}
              />
            </div>
            <strong>{dashboardData.predictionCard.confidence}%</strong>
          </div>
          <p className={styles.predictionNote}>
            {dashboardData.predictionCard.summary}
          </p>
          <div className={styles.breakdownList}>
            {dashboardData.predictionCard.breakdown.map((item) => (
              <div key={item.range} className={styles.breakdownItem}>
                <div>
                  <span>{item.range}</span>
                  <strong>{item.trend}</strong>
                </div>
                <small>{item.confidence}%</small>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statusGroup}>
          <div className={styles.recommendationCard}>
            <div className={styles.sectionTitle}>Smart Recommendation</div>
            <div className={styles.recommendationBanner}>HOLD / WAIT</div>
            <ul>
              {dashboardData.recommendation.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className={styles.alertBox}>
              {dashboardData.recommendation.alerts}
            </div>
          </div>
        </div>
      </section>

{/* FEATURES */}
      <section className={styles.featureRow}>
        {dashboardData.features.map((feature) => (
          <div key={feature.title} className={styles.featureCard}>
            <strong>{feature.title}</strong>
            <p>{feature.subtitle}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
