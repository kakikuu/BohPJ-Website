import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Works } from "@/types/works"
import { client } from "@/libs/client";
const inter = Inter({ subsets: ['latin'] })


type Props = {
  works: Works[];
}

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
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

