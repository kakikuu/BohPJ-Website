import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type Props = {
  woks: Works[];
}

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
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