import Link from 'next/link';
export default function ThisIsMe() {
    return (
        <main>
            <div>
                <h1>私について</h1>
                <h2>メンバー一覧</h2>
                <ul>
                    <li><Link href="/1"></Link>1人目</li>
                    <li><Link href="2"></Link>2人目</li>
                    <li><Link href="3"></Link>3人目</li>
                </ul>
            </div>
        </main>
    )
}