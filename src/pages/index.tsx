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
            newsDay="2024/03/20"
            title="アイフルデータハッカソンにて優秀賞を受賞！"
            content="2024年3月に行われたアイフルデータハッカソンに本クラブ部員の乾映之右、高橋快成、岩田直樹、松田悠杜、津布久尚貴(当時1年生)が参加し、優秀賞を受賞しました！このハッカソンは生の金融データを用いて機械学習モデルを構築し予測精度を競うもので、今回は東大生や大学院生チームが出場している中での2位獲得、優秀賞受賞となりました！最終スコアは1位までわずか0.005%に迫る大接戦だったそうです...！"
          ></NewsContent>
          <NewsContent
            newsDay="2023/03/11"
            title="GMOインターネットグループの成瀬様による講演会を開催！"
            content="2024年3月、GMOインターネットグループの成瀬允宣様による講演会を開催して頂きました！講演会ではキャリア形成、問題解決能力に関するお話とワークショップに加え、GMO本社のオフィス案内もして頂きました。成瀬さん、貴重な機会をありがとうございました！"
          ></NewsContent>
          <NewsContent
            newsDay="2024/03/05"
            title="第16回データ工学と情報マネジメントに関するフォーラム(DEIM2024)にて論文を発表！"
            content="2024年3月に開催されたDEIM2024にて、本クラブ部員の阿部広夢(当時3年生)、佐伯綾亮(当時2年)、乾映之右、津布久尚貴(当時1年生)が論文を発表しました！本クラブでは学年を超えてグループを組み研究活動に取り組んでいます。"
          ></NewsContent>
          <NewsContent
            newsDay="2023/12/08"
            title="scikit-learnを0から作ろうProjectがスタート！"
            content="Pythonの機械学習ライブラリ「scikit-learn」を0から実装していくプロジェクトが始動！機械学習モデルを1から実装していくことで、コーディング力の向上と共に機械学習モデルへの理解を深めていきます。活動はNotionにて随時発信していきます！"
          ></NewsContent>
          <NewsContent
            newsDay="2023/07/29"
            title="技育CAMPキャラバン2023Vol.3@金沢にて企業賞を受賞！"
            content="2023年7月に開催された技育CAMPキャラバン2023Vol.3@金沢に本クラブ部員の佐伯綾亮、石戸莞楽、槇本瑛太、秋田翔平、中城裕之(当時2年生)が参加し、ウイングアーク1st株式会社様より企業賞を受賞しました！講評では技術選定や作品の実用性に関してコメントを頂きました。"
          ></NewsContent>
          <NewsContent
            newsDay="2023/03/09"
            title="第15回データ工学と情報マネジメントに関するフォーラム(DEIM2023)にて論文を発表！"
            content="2023年3月に開催されたDEIM2023にて本クラブ部員の外崎未空(当時1年生)、石井雄太(当時3年生)が論文を発表しました！外崎さんは大学入学後わずか1年足らずでの論文執筆・学会発表となりました！"
          ></NewsContent>
          <NewsContent
            newsDay="2023/03/04"
            title="情報処理学会第85回全国大会にて学生奨励賞を受賞！"
            content="2023年3月に開催された情報処理学会第85回全国大会において、本クラブ部員の青木慎太郎、浅井悠一郎(当時2年生)が論文を発表し学生奨励賞を受賞しました！情報処理学会は情報分野国内最大の学会で、1000件以上の発表から選出されての受賞となりました！大学広報からもプレスリリースを出して頂きました。"
          ></NewsContent>
        </div>
        </section>

      </main>
      <Footer></Footer>
    </div>
  );
};
export default about;


