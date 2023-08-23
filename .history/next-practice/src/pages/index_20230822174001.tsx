import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Works } from "@/types/works"
import { client } from "@/libs/client";
const inter = Inter({ subsets: ['latin'] })


type Props = {
  works: Works[];
}
// Postsを定義している。propsとして、worksを受け取る
//　下のは関数を定義している(関数としてコンポーネントを定義している)
const Posts: React.FC<Props> = ({ works }) => {
  return (
    <div>
      {/* <Navigation /> */}
      <main>
        <Image src="/../../public/images/logo_color.png" alt="Nakanishi PJ" width={150} height={150} />
        <h1>Works</h1>
        <p>BohPJ</p>

        <div>
          <h2>Works</h2>
          {/* microCMSからの情報が入力される */}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default Posts;

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


const DisplayContents: React.FC<Props> = ({ works }) => {
  return (
    <div>
      {works.map((works) => (
        <div key={works.id}>
          <h2>{works.title}</h2>
          <p>{works.describe}</p>
          <div>
            {works.image.map((img) => (
              <img
                key={img.url}
                src={img.url}
                alt={works.title}
                height={img.height}
                width={img.width}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};