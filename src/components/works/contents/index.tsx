// DisplayContents コンポーネント
import Image from "next/image";
import Link from "next/link";

import { WorksPosts } from "@/types/works";
import styles from "./style.module.css";

type WorksComponentProps = {
  posts: WorksPosts[];
};

const DisplayContents: React.FC<WorksComponentProps> = ({ posts }) => {
  return (
    <main>
      <div className={styles.works__contents}>
        <h2>Works</h2>
        {posts.map((p, index) =>
          // NewsのデータもPostsに含まれてしまうので、ここでworksのデータだけ取り出すようにする
          p.slidedata ? (
            <div className={styles.works__set} key={index}>
              <img
                className={styles.works__display}
                src={`https:${p.slidedata.fields.file.url}`}
              />
              <div className={styles.works__text}>
                <h3>{p.workstitle}</h3>
                <p>{p.workoverview}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </main>
  );
};

export default DisplayContents;
