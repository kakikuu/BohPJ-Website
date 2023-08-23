import Link from 'next/link'
export default function Members() {
    return (
        <main>
            <div>
                <ul>
                    {/* memberIdは/member/1で決定して、渡している */}
                    <li><Link href='/member/1'>1人目</Link></li>
                    <li><Link href='/member/2'>2人目</Link></li>
                    <li><Link href='/member/3'>3人目</Link></li>
                </ul>

            </div>
        </main>
    )
}