import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navigation />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
