import styles from '../styles/boh_home.module.css'
import Footer from '../components/footer';
import Navbar from '../components/navigation';

import { News } from "@/types/news";
import { client } from "@/libs/client";

type Props = {
  news: News[];
}

const about: React.FC<Props> = ({ news }) => {
  return (
    <div className={styles.AllPage}>
      <Navbar></Navbar>
      <main>
        <section className={styles.section} id={styles.section1}>
          <img src="images/background-home-header.png" className={styles.Page1_image} />
          <div className={styles.Page1}>
            <h1 className={styles.TitleName}>BohPJ</h1>
            <h2 className={styles.UniversityName}>Musashino University</h2>
          </div>
        </section>

        <section className={styles.section} id={styles.section2}>
          <div className={styles.image}></div>
          {/* <img src="images/logo_color.png" className={styles.Page1_image} /> */}
          <div className={styles.Page2}>
            <h1 className={styles.About}>About</h1>
            <p className={styles.Introduction}>本プロジェクトは、2019年5月から大学の講義とは別に有志の学生が集まり、週1回のミーティングを行いながら研究(及び開発)を進めるプロジェクトです。 これまでに、画像認識や自然言語処理を用いた研究、またこれらの研究成果を取り込んだアプリケーション実装などを学生主体で実施し、オープンキャンパスや学会などで成果の発表を行ってきました。 データサイエンスやプログラムに関する技術や知識が今はまだないの人であっても、本プロジェクトでの活動で、大学の学習ペースに囚われることなく、学びたいことを追求していくことができます。</p>
          </div>
        </section>

        <section className={styles.section} id={styles.section3}>
          <div className={styles.image}></div>
          <div className={styles.Page3}>
            <h1 className={styles.News}>News</h1>
            {/* ここにmicroCMSの情報を記述する*/}
            {news.map((news) => (
              <div key={news.id} className={styles.WorkDisplay}>
                <div className={styles.ContentsTitle}>
                  <h2 className="ContentsTitle">{news.title}</h2>
                  <p className="ContentsDescribe">{news.content}</p>
                </div>
              </div>
            ))}
            {/* <p className={styles.NewsContents}>準備中</p> */}

          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}
export default about;
// microCMSの情報を得る
export const getStaticProps = async () => {
  // この関数はビルド時に実行される
  // clientを使って、MicroCMSのAPIにアクセスしている
  // 取得したコンテンツをページコンポーネントにpropsとして取得したデータをworksプロパティとして返す
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};