import Link from 'next/link'
export default function Members() {
    return (
        <main>
            <div>
                <ul>
                    <li><Link href='/member/1'>1</Link></li>
                    <li><Link href='/member/2'>2</Link></li>
                    <li><Link href='/member/3'>3</Link></li>
                </ul>

            </div>
        </main>
    )
}