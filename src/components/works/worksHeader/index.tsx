import Image from "next/image";
import styles from "./style.module.css";
import workHeaderImage from "/public/images/background-works-header.png";

const WorksHeader: () => JSX.Element = () => {
  return (
    <div className={styles["works-header"]}>
      <p className={styles["works-header__title"]}>Works</p>
      <Image
        src={workHeaderImage}
        alt=""
        className={styles["works-header__background-image"]}
      />
    </div>
  );
};

export default WorksHeader;
