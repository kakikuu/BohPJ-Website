import styles from '@/components/header/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src="bohpj_logo.png" className={styles.img_logo} />
            </div>
            <h1>BohPJ Official Site</h1>
        </header>
    )
}