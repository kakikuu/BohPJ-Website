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
          {assets.map((a) => {
            return
            <div className={styles.somenale}>
              <iframe src={`https:${a.file.url}`} width="100%" height="600px" />
            </div>
          })}
          {posts.map((p) => {
            return <div>
              <h2 className="ContentsTitle">{p.title}</h2>
              <p className="ContentsDescribe">{p.slideoverview}</p>
            </div>
          })}
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
};
export default DisplayContents;

// at the top of your component file
// 他のimport文

// コンポーネント定義
const DisplayContents: React.FC = ({ posts, assets }) => {

  return (
    <div className="postsData">
      {posts.map((p) => {
        return <Post key={p.workstitle} workstitle={p.workstitle} />
      })}
      {assets.map((a) => {
        return <DisplayPdf key={a.title} dataTitle={a.title} fileUrl={`https:${a.file.url}`} />
      })}
    </div>
  )
}
// todo:エンドポイントの指定をどこで行っているのかを確認する

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
