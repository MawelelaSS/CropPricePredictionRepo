import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './Navigation.module.css';

function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={styles.navigation}>
      <Link to="/" className={styles.brandLink}>
        <span className={styles.brandIcon}>↗</span>
        <div>
          <strong>AgriMarketPulse</strong>
          <small>Smart Farming Intelligence</small>
        </div>
      </Link>
      <nav className={styles.navLinks}>
        {user ? (
          <>
            <span className={styles.userEmail}>{user.email}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className={styles.primaryButton}>Get Started</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
