import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate signup success
    navigate('/login');
  };

  return (
    <div className={styles.authPage}>
      <article className={styles.authCard}>
        <div className={styles.logoBlock}>
          <span className={styles.logoIcon}>↗</span>
          <div>
            <strong>AgriMarketPulse</strong>
            <small>Smart Farming Intelligence</small>
          </div>
        </div>

        <div className={styles.authHeader}>
          <strong>Create Your Account</strong>
          <p>Start your free 30-day trial today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="farmer@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label>Province</label>
            <select required>
              <option>Select your province</option>
              <option>Gauteng</option>
              <option>KwaZulu-Natal</option>
              <option>Western Cape</option>
              <option>Mpumalanga</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="At least 6 characters" required />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" required />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
          </div>

          <button type="submit" className={styles.submitButton}>Create Account</button>
        </form>

        <div className={styles.authFooter}>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </article>
    </div>
  );
}

export default SignupPage;
