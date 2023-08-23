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
        <Image src="images/logo_color.png" alt="Nakanishi PJ" width={150} height={150} />
        <h1>Works</h1>
        <p>BohPJ</p>
        <div>
          <h2>Works</h2>
          {/* microCMSからの情報が入力される */}
        </div>
      </main>
      <Footer />
    </div>
  )
}