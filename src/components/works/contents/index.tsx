import Image from 'next/image'
import Link from 'next/link'

import { Works } from "@/types/works";
import styles from './style.module.css';
import { fetchEntries } from '../../../libs/client_entries'
import { fetchAsset } from '../../../libs/client_asset'


type WorksComponentProps = {
    assets: Works[];
}

// 下のは関数を定義している(関数としてコンポーネントを定義している)
const DisplayContents: React.FC<Props> = ({ assets, posts }) => {
    const reversedAssets = assets.reduceRight((acc, item) => {
        // 画像がテキストの表示順と逆になっているので、画像の表示順を逆にする
        acc.push(item);
        return acc;
    }, []);
    console.log(reversedAssets)

    return (
        <main>
            <div>
                <div className={styles.works__contents}>
                    <h2>Works</h2>
                    <div className={styles.works__content}>
                        <div className={styles.works__content}>
                            {reversedAssets.map((a, index) => (
                                <div className={styles.works__set} key={index}>
                                    <img className={styles.works__display} src={`https:${a.file.url}`} />
                                    <div className={styles.works__text}>
                                        <h3>{posts[index]?.workstitle}</h3>
                                        <p>{posts[index]?.workoverview}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

// getStaticPropsの定義



export async function getStaticProps() {
    const resEntries = await fetchEntries() // タイトルや概要を取得
    const resAssets = await fetchAsset() //スライドのデータを取得

    const posts = await resEntries.map((p) => {
        return p.fields
    })
    const assets = await resAssets.Asset.map((a) => {
        return a.fields
    })
    // データの取得...
    return {
        props: {
            posts,
            assets
        },
    }
}

export default DisplayContents;