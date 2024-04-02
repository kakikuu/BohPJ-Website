import styles from "./index.module.css";
import React from "react";

type NewsComponentProps = {
  newsDay: string;
  title: string;
  content: string;
};

const NewsContent: React.FC<NewsComponentProps> = ({
  newsDay,
  title,
  content,
}) => {
  return (
    <div className={styles.home__page3__contentful__piece}>
      <h2 className={styles.home__page3__contentful__piece__day__detail}>
        {newsDay}
      </h2>

      <div className={styles.home__page3__contentful__piece__content}>
        <h2 className={styles.home__page3__contentful__piece__content__title}>
          {title}
        </h2>
        <p className={styles.home__page3__contentful__piece__content__text}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default NewsContent;
