import Image from 'next/image'
import Link from 'next/link'

import { Works } from "@/types/works";
import { client } from "@/libs/client";
import styles from '../styles/works.module.css';
import Footer from '../components/footer';
import Navbar from '../components/navigation';
import { fetchEntries } from '../libs/client_entries'
import { fetchAsset } from '../libs/client_asset'
import Post from '../components/Post'
import DisplayPdf from '../components/Post/pdfDisplay'
import { getJSDocReturnType } from 'typescript';

type Props = {
  works: Works[];
}
// Postsを定義している。propsとして、worksを受け取る
//　下のは関数を定義している(関数としてコンポーネントを定義している)
const DisplayContents: React.FC<Props> = ({ assets, posts }) => {
  const reversedArray = assets.reduceRight((acc, item) => {
    acc.push(item);
    return acc;
  }, []);
  return (
    <main>
      <Navbar></Navbar>
      <div>
        <div className={styles.pagetitle}>
          <p>Works</p>
          <Image src="/images/background-works-header.png" alt="" width="1450" height="800" />
        </div>
        <div className={styles.WorksContens}>
          <h2>Works</h2>
          <div className={styles.WorkContentsDetail}>
            {assets.map((a) => {
              return <iframe className={styles.WorkDisplay} src={`https:${a.file.url}`} />
            })}


// 逆順の配列をmapメソッドで展開
const mappedArray = reversedArray.map((item, index) => {
    // 何らかの処理...
    return item;
});
            {posts.map((p) => {
              return <div className={styles.WorksContens}>
                <h3 >{p.workstitle}</h3>
                <p> {p.workoverview}</p>
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
};

// getStaticPropsの定義
export async function getStaticProps() {

  const resEntries = await fetchEntries() // タイトルや概要を取得
  const resAssets = await fetchAsset() //スライドのデータを取得

  const posts = await resEntries.map((p) => {
    return p.fields
  })
  const assets = await resAssets.Asset.map((a) => {
    return a.fields

  })

  return {
    props: {
      posts,
      assets
    },
  }
}

// 他のexport文
export default DisplayContents;