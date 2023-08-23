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
const DisplayContents: React.FC<Props> = ({ works }) => {
  return (
    <div>
      {works.map((works) => (
        <div key={works.id}>
          <h2>{works.title}</h2>
          <p>{works.describe}</p>
          <div>
            {works.image.map((img: any) => (
              <div key={works.id}>
                <image src={img.url}
                  height={img.height}
                  width={img.width}></image>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
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

