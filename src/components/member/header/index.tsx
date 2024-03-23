import styles from "./header.module.css";
import Image from "next/image";
import hedderImage from "/public/images/background-member-header.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={hedderImage}
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
