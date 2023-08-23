import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/images/background-member-header.png"
        alt="header background"
        className={styles.headerImage}
      />
      <div className={styles.headerTitleContainer}>
        <p className={styles.headerTitle}>Member</p>
        <p className={styles.headerSubtitle}>BohPJ</p>
      </div>
    </header>
  );
}
