import styles from './Header.module.css';
import logo from '../../assets/Logo.svg';

export function Header() {
  
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="Rocket todo" />
    </header>
  );
}