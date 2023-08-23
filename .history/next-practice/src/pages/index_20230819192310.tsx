import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation/navigation'
import Footer from './components/navigation/footter'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        {/* 画像を挿入する */}
        <img src="images/logo_color.png" alt="Nakanishi PJ" width={150} height={150} />
        <h1>Works</h1>
        <p>BohPJ</p>
        <div>
          <h2>Works</h2>
          <p>本プロジェクトは、2019年5月から大学の講義とは別に有志の学生が集まり、週1回のミーティングを行いながら研究(及び開発)を進めるプロジェクトです。 これまでに、画像認識や自然言語処理を用いた研究、またこれらの研究成果を取り込んだアプリケーション実装などを学生主体で実施し、オープンキャンパスや学会などで成果の発表を行ってきました。 データサイエンスやプログラムに関する技術や知識が今はまだないの人であっても、本プロジェクトでの活動で、大学の学習ペースに囚われることなく、学びたいことを追求していくことができます。</p>
        </div>
        <div>
          <h3>News</h3>
          <div>
            情報処理学会
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}