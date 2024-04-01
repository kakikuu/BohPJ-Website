import Image from 'next/image';
import styles from './index.module.css';
import img from '../../../../public/images/logo_BohPJ.png';

const AboutContent: React.FC = () => {
  return(
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
);
}

export default AboutContent;
