import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Crop Market Prediction</div>
      <div className={styles.links}>
        <a href="#overview">Overview</a>
        <a href="#prediction">Prediction</a>
        <a href="#analytics">Analytics</a>
        <a href="#crops">Crops</a>
      </div>
    </nav>
  );
}

export default Navbar;
