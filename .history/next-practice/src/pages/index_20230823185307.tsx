import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import { Works } from "@/types/works";
import { client } from "@/libs/client";
import styles from '../styles/works.module.css';
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin'] })

type Props = {
  works: Works[];
}
// Postsを定義している。propsとして、worksを受け取る
//　下のは関数を定義している(関数としてコンポーネントを定義している)
const DisplayContents: React.FC<Props> = ({ works }) => {
  return (
    <main>
      <div>
        <div className={styles.pagetitle}>
          <h1>works</h1>
          <Image src="/images/WorkHeaderImage.png" alt="" width="1000" height="600" />
        </div>
        {works.map((works) => (
          <div key={works.id} className={styles.WorkDisplay}>
            {works.image.map((img: any) => (
              <Image
                src={img.url}
                alt="Image Description"
                height="300"
                width="400"
                className={styles.WorkImg}
                key={works.id}
              />
            ))}
            <div className={styles.ContentsTitle}>
              <h2 className="ContentsTitle">{works.title}</h2>
              <p className="ContentsDescribe">{works.describe}</p>
            </div>
          </div>
        ))}
      </div>
    </main >
  );
};
export default DisplayContents;

// microCMSの情報を得る
export const getStaticProps = async () => {
  // この関数はビルド時に実行される
  // clientを使って、MicroCMSのAPIにアクセスしている
  // 取得したコンテンツをページコンポーネントにpropsとして取得したデータをworksプロパティとして返す
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

