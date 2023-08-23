import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Works } from "@/types/works"
import { client } from "@/libs/client";
import styles from '../styles/works.module.css';
const inter = Inter({ subsets: ['latin'] })


type Props = {
  works: Works[];
}
// Postsを定義している。propsとして、worksを受け取る
//　下のは関数を定義している(関数としてコンポーネントを定義している)
const DisplayContents: React.FC<Props> = ({ works }) => {
  return (
    <div>
      <div className={styles.pagetitle}>
        {/* <Image src="/next-practice/" width="500" height="300"></Image> */}
        <h1>works</h1>
      </div>
      <div className='WorkDisplay'>
        {works.map((works) => (
          <div key={works.id}>
            <div>
              {works.image.map((img: any) => (
                <div key={works.id} className='WorkImg'>
                  <Image
                    src={img.url}
                    alt="Image Description"
                    height="300"
                    width="400"
                  />
                </div>
                <h2 className={styles.WorkTitle}>{works.title}</h2>
                <p className={styles.WorkDescribe}>{works.describe}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div >
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

