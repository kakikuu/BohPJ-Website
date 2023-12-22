import Image from 'next/image'
import Link from 'next/link'

import { Works } from "@/types/works";
import Footer from '../components/footer';
import Navbar from '../components/navigation';
import { fetchEntries } from '../libs/client_entries'
import { fetchAsset } from '../libs/client_asset'
import DisplayContents from '../components/works/contents/index'
import WorksHeader from '../components/works/worksHeader/index'


// Postsを定義している。propsとして、worksを受け取る
//　下のは関数を定義している(関数としてコンポーネントを定義している)
const WorksPage = ({ posts, assets }) => {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <WorksHeader></WorksHeader>
        <DisplayContents assets={assets} posts={posts} />
        <Footer></Footer>
      </main>

    </div>
  );
}

export default WorksPage;

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
      posts, // fetched data
      assets, // fetched data
    },
  }
}

