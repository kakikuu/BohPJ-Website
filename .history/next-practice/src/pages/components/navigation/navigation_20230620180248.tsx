import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

export default function Navigation() {
    return (
        <ul>
            <li><Link href='/'></Link>home</li>
            <li><Link href='./member'></Link>member</li>
        </ul>
    )
}