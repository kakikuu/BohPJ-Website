// import Image from 'next/image'
// import Link from 'next/link'

// import { Works } from "@/types/works";
// import { client } from "@/libs/client";
// import styles from '../styles/works.module.css';
// import Footer from '../components/footer';
// import Navbar from '../components/navigation';


// type Props = {
//   works: Works[];
// }
// // Postsを定義している。propsとして、worksを受け取る
// //　下のは関数を定義している(関数としてコンポーネントを定義している)
// const DisplayContents: React.FC<Props> = ({ works }) => {
//   return (
//     <main>
//       <Navbar></Navbar>
//       <div>
//         <div className={styles.pagetitle}>
//           <p>Works</p>
//           <Image src="/images/background-works-header.png" alt="" width="1450" height="800" />
//         </div>
//         <div className={styles.WorksContens}>
//           <h2>Works</h2>
//           {works.map((works) => (
//             <div key={works.id} className={styles.WorkDisplay}>
//               {works.image.map((img: any) => (
//                 <Image
//                   src={img.url}
//                   alt="Image Description"
//                   height="300"
//                   width="400"
//                   className={styles.WorkImg}
//                   key={works.id}
//                 />
//               ))}
//               <div className={styles.ContentsTitle}>
//                 <h2 className="ContentsTitle">{works.title}</h2>
//                 <p className="ContentsDescribe">{works.describe}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer></Footer>
//     </main >
//   );
// };
// export default DisplayContents;

// // microCMSの情報を得る
// export const getStaticProps = async () => {
//   // この関数はビルド時に実行される
//   // clientを使って、MicroCMSのAPIにアクセスしている
//   // 取得したコンテンツをページコンポーネントにpropsとして取得したデータをworksプロパティとして返す
//   const data = await client.get({ endpoint: "works" });

//   return {
//     props: {
//       works: data.contents,
//     },
//   };
// };

// at the top of your component file
// 他のimport文
import { fetchEntries } from '../libs/client_entries'
import { fetchAsset } from '../libs/client_asset'
import Post from '../components/Post'
import DisplayPdf from '../components/Post/pdfDisplay'
// コンポーネント定義
const DisplayContents: React.FC = ({ posts, assets }) => {

  return (
    <div className="postsData">

      {posts.map((p) => {
        return <Post key={p.workstitle} workstitle={p.workstitle} />
      })}
      {/* {assets.map((a) => {
        return <DisplayPdf key={a.title} dataTitle={a.title} fileUrl={a.file.url} />
      })} */}
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
    // {
    // title: 'スライドのテストですねこれは。',
    // description: 'ｓふぁｓｄｆだｓｆさふぁｓｆさｄｆ',
    // file: {
    //   url: '//assets.ctfassets.net/lzs9okm7hyle/3mLBpTI3gA7gA3N8LP3c80/b29956c5f1e901419b139f18eeb63560/dicomo2023_____.pdf',
    //   details: { size: 5533194 },
    //   fileName: 'dicomo2023_発表資料.pdf',
    //   contentType: 'application/pdf'
    // }

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
