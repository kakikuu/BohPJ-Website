import styles from './navigation.module.css'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <p><Link href='/'>Home</Link></p>
            <p><Link href='/works'>Works</Link></p>
            <p><Link href='/member'>Member</Link></p>
        </nav>
    )
}