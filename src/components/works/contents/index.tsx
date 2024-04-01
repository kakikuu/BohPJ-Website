import { FC } from "react"; // FC (FunctionComponent) タイプをインポート
import Image from "next/image";
import styles from "./style.module.css";

// WorksComponentProps 型を再確認します。
type WorksComponentProps = {
  title: string;
  content: string;
  file: any;
};

const DisplayContent: FC<WorksComponentProps> = ({ title, content, file }) => {
  return (
    <div className={styles.works__contents}>
      <div className={styles.works__set}>
        {file && (
          <Image src={file} alt={title} className={styles.works__display} />
        )}
        <div className={styles.works__text}>
          <h3>{title}</h3>
          <a href={content} target="_blank" rel="noopener noreferrer">
            詳細はこちらから
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
