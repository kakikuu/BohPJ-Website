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

import { fetchEntries } from '../libs/client'
import Post from '../components/Post'

// inside your component markup, pull `posts` from props

<div className="posts">
  {posts.map((p) => {
    return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
  })}
</div>

// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}