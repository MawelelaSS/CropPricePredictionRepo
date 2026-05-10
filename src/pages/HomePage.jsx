import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>AI Powered Market Intelligence</p>
          <h1>Stop Guessing. Start Profiting.</h1>
          <p className={styles.heroText}>
            Join thousands of South African farmers who’ve increased their crop profits by using data-driven price prediction and smart selling recommendations.
          </p>
          <div className={styles.heroActions}>
            <Link to="/signup" className={styles.primaryButton}>Start Free Trial</Link>
            <Link to="#learn" className={styles.secondaryButton}>Learn More</Link>
          </div>
          <div className={styles.heroStats}>
            <div>
              <strong>15%+</strong>
              <span>Average Price Increase</span>
            </div>
            <div>
              <strong>78%</strong>
              <span>Prediction Accuracy</span>
            </div>
            <div>
              <strong>5000+</strong>
              <span>Active Farmers</span>
            </div>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCardLabel}>Current Price Now</div>
          <div className={styles.heroCardValue}>R4,500</div>
          <div className={styles.heroCardMeta}>per ton · Maize · Gauteng</div>
          <div className={styles.heroCardFooter}>+12% recommendation HOLD</div>
        </div>
      </section>

      <section className={styles.problemSection} id="learn">
        <p className={styles.sectionIntro}>The Problem Farmers Face</p>
        <h2>Small-scale farmers in South Africa face losses every season due to poor timing and market uncertainty.</h2>
        <div className={styles.problemCards}>
          <div className={styles.problemCard}>
            <strong>Price Volatility</strong>
            <p>Crop prices can drop 30% overnight. Without data, farmers lose time, buyers, and profit.</p>
          </div>
          <div className={styles.problemCard}>
            <strong>Information Gap</strong>
            <p>Markets are often unclear and weather signals are missed without reliable analytics.</p>
          </div>
          <div className={styles.problemCard}>
            <strong>Lost Income</strong>
            <p>Farmers often miss optimal selling windows and lose up to 20% of potential revenue.</p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <p className={styles.sectionIntro}>How AgriMarketPulse Helps</p>
        <h2>Our AI-powered platform gives you the market intelligence that was once only available to large commercial farms.</h2>
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <strong>AI Price Predictions</strong>
            <p>Machine learning models analyze market signals and weather patterns to forecast price movement.</p>
          </article>
          <article className={styles.featureCard}>
            <strong>Weather Integration</strong>
            <p>Real-time climate data improves prediction accuracy and timing decisions.</p>
          </article>
          <article className={styles.featureCard}>
            <strong>Smart Alerts</strong>
            <p>Receive clear action prompts when the market conditions are right to sell or hold.</p>
          </article>
          <article className={styles.featureCard}>
            <strong>Clear Recommendations</strong>
            <p>Know whether to HOLD, SELL or WAIT based on reliable forecast confidence.</p>
          </article>
          <article className={styles.featureCard}>
            <strong>Mobile Friendly</strong>
            <p>Access market insights from your phone, farmgate, or office anytime.</p>
          </article>
          <article className={styles.featureCard}>
            <strong>Farmer-First Design</strong>
            <p>Built for local farmers with simple dashboards and practical recommendations.</p>
          </article>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <p className={styles.sectionIntro}>What Farmers Say</p>
        <div className={styles.testimonialRow}>
          <article className={styles.testimonialCard}>
            <strong>Teboho Molema</strong>
            <p>“The forecasts helped me lock in a higher price for my maize and avoid a bad market week.”</p>
          </article>
          <article className={styles.testimonialCard}>
            <strong>Noma Matimele</strong>
            <p>“AgriMarketPulse gave me the confidence to wait for the right buyer and earn more from my harvest.”</p>
          </article>
          <article className={styles.testimonialCard}>
            <strong>Pieter van der Merwe</strong>
            <p>“Easy to use dashboard and real-time weather signals made planning much simpler this season.”</p>
          </article>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <p className={styles.sectionIntro}>How It Works</p>
        <div className={styles.stepsRow}>
          <div className={styles.stepCard}>
            <span>1</span>
            <strong>Sign Up Free</strong>
            <p>Create your account in minutes and get tailored farming signals for your crop.</p>
          </div>
          <div className={styles.stepCard}>
            <span>2</span>
            <strong>Select Your Crops</strong>
            <p>Choose your crop and region to receive precise pricing and weather updates.</p>
          </div>
          <div className={styles.stepCard}>
            <span>3</span>
            <strong>Get Smart Insights</strong>
            <p>Follow timely recommendations and maximize profit from every harvest.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <strong>Ready to Increase Your Farm Profits?</strong>
            <p>Join over 5,000 South African farmers already making smarter selling decisions.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link to="/signup" className={styles.primaryButton}>Start Free 30-Day Trial</Link>
            <Link to="/login" className={styles.secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
