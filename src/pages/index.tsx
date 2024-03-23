import styles from "../styles/boh_home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navigation";
import fetchEntries from "../libs/client_entries";
import Image from "next/image";
import img from "../../public/images/logo_BohPJ.png";

interface AboutProps {
  posts: Posts;
}

const about: React.FC<AboutProps> = ({ posts }) => {
  return (
    <div className={styles.home__allpage}>
      <Navbar></Navbar>
      <main>
        {/* １ページ目 */}
        <section className={styles.home}>
          <div className={styles.home__page1}>
            <h1 className={styles.home__page1__title}>BohPJ</h1>
            <h2 className={styles.home__page1__subtitle}>
              Musashino University
            </h2>
          </div>
        </section>

        {/* ２ページ目 */}
        <section className={styles.home}>
          <div className={styles.home__page2}>
            <h1 className={styles.home__page2__title}>About</h1>
            <div className={styles.home__page2__main}>
              <div className={styles.home__page2__main__img}>
                <Image
                  className={styles.home__page2__main__img__detail}
                  src={img}
                  alt="header"
                />
              </div>
              <div className={styles.home__page2__main__text}>
                <p className={styles.home__page2__main__text__detail}>
                  本プロジェクトは、2019年5月から大学の講義とは別に有志の学生が集まり、週1回のミーティングを行いながら研究(及び開発)を進めるプロジェクトです。
                  これまでに、画像認識や自然言語処理を用いた研究、またこれらの研究成果を取り込んだアプリケーション実装などを学生主体で実施し、オープンキャンパスや学会などで成果の発表を行ってきました。
                  データサイエンスやプログラムに関する技術や知識が今はまだないの人であっても、本プロジェクトでの活動で、大学の学習ペースに囚われることなく、学びたいことを追求していくことができます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ３ページ目 */}
        <section className={styles.home}>
          <div className={styles.home__page3}>
            <h1 className={styles.home__page3__title}>News</h1>
            {/* ここにmicroCMSの情報を記述する*/}
            <div className={styles.home__page3__contentful}>
              {posts.map(
                (post, index) =>
                  post?.newsday && (
                    <div
                      key={index}
                      className={styles.home__page3__contentful__piece}
                    >
                      <div
                        className={styles.home__page3__contentful__piece__day}
                      >
                        <h2
                          className={
                            styles.home__page3__contentful__piece__day__detail
                          }
                        >
                          {post.newsday}
                        </h2>
                      </div>
                      <div
                        className={
                          styles.home__page3__contentful__piece__content
                        }
                      >
                        <h2
                          className={
                            styles.home__page3__contentful__piece__content__title
                          }
                        >
                          {post.newstitle}
                        </h2>
                        <p
                          className={
                            styles.home__page3__contentful__piece__content__text
                          }
                        >
                          {post.newsoverview}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default about;

export async function getStaticProps() {
  const resEntries = await fetchEntries(); // タイトルや概要を取得
  const posts: NewsFields[] = await resEntries.map(
    (p: NewsContentfulEntry): NewsFields => {
      return p.fields;
    }
  );

  return {
    props: {
      posts,
    },
  };
}
