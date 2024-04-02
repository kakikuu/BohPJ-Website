import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import aboutHeaderImage from "../../../../public/images/background-home-header.png";

const AboutHeader: React.FC = () => {
  return (
    <div className={styles.home__page1}>
      <h1 className={styles.home__page1__title}>BohPJ</h1>
      <h2 className={styles.home__page1__subtitle}>Musashino University</h2>
      <Image
        src={aboutHeaderImage}
        alt=""
        className={styles.home__page1__background}
      />
    </div>
  );
};

export default AboutHeader;
