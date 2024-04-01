import styles from "../styles/boh_home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navigation";
import NewsContent from "../components/about/newsContent";
import AboutHeader from "../components/about/aboutHeader";
import AboutContent from "@/components/about/aboutContent";

const about: React.FC = () => {
  return (
    <div className={styles.home__allpage}>
      <Navbar></Navbar>
      <main>
        <section className={styles.home}>
          <AboutHeader></AboutHeader>
        </section>

        <section className={styles.home}>
          <AboutContent></AboutContent>
        </section>

        <section className={styles.home}>
        <div className={styles.home__page3}>
          <h1 className={styles.home__page3__title}>News</h1>
          <NewsContent
            newsDay="2021/10/10"
            title="BohPJのWebサイトがリニューアルしました！"
            content="BohPJのWebサイトがリニューアルしました！"
          ></NewsContent>
          <NewsContent
            newsDay="2021/10/10"
            title="BohPJのWebサイトがリニューアルしました！"
            content="BohPJのWebサイトがリニューアルしました！"
          ></NewsContent>
        </div>
        </section>

      </main>
      <Footer></Footer>
    </div>
  );
};
export default about;


