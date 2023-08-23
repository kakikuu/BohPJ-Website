import styles from '../styles/boh_home.module.css'

export default function about() {
    return(
        <div className={styles.AllPage}>
            <main>
                <section className={styles.section} id={styles.section1}>
                    <img src="img/home_image.png" className={styles.Page1_image} />
                    <div className={styles.Page1}>
                        <h1 className={styles.TitleName}>BohPJ</h1>
                        <h2 className={styles.UniversityName}>Musashino University</h2>
                    </div>
                </section>

                <section className={styles.section} id={styles.section2}>
                    <div className={styles.image}></div>
                    <div className={styles.Page2}>
                        <h1 className={styles.About}>About</h1>
                        <p className={styles.Introduction}>本プロジェクトは、2019年5月から大学の講義とは別に有志の学生が集まり、週1回のミーティングを行いながら研究(及び開発)を進めるプロジェクトです。 これまでに、画像認識や自然言語処理を用いた研究、またこれらの研究成果を取り込んだアプリケーション実装などを学生主体で実施し、オープンキャンパスや学会などで成果の発表を行ってきました。 データサイエンスやプログラムに関する技術や知識が今はまだないの人であっても、本プロジェクトでの活動で、大学の学習ペースに囚われることなく、学びたいことを追求していくことができます。</p>
                    </div>
                </section>

                <section className={styles.section} id={styles.section3}> 
                    <div className={styles.image}></div>
                    <div className={styles.Page3}>
                        <h1 className={styles.News}>News</h1>
                    </div>
                </section>
            </main>
        </div>
    )
}
