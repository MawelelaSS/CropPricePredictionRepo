import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import styles from './Auth.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    
    // Simulate login success
    login({ email });
    navigate('/dashboard');
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
          <strong>Welcome Back</strong>
          <p>Sign in to access your farm dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="farmer@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <a href="#" className={styles.forgotLink}>Forgot password?</a>
          </div>

          <button type="submit" className={styles.submitButton}>Sign In</button>
        </form>

        <div className={styles.authFooter}>
          Don’t have an account? <Link to="/signup">Sign up for free</Link>
        </div>
      </article>
    </div>
  );
}

export default LoginPage;
