import Image from 'next/image'
import Link from 'next/link'

import { Works } from "@/types/works";
import { client } from "@/libs/client";
import styles from '../styles/works.module.css';
import Footer from '../components/footer';
import Navbar from '../components/navigation';

const DisplayContents: React.FC<Props> = ({ works }) => {
    return (
        <main>
            <Navbar></Navbar>
            <div>
                <div className={styles.pagetitle}>
                    <p>Works</p>
                    <Image src="/images/WorkHeaderImage.png" alt="" width="1450" height="800" />
                </div>
                <div className={styles.WorksContens}>
                    <h2>Works</h2>
                    {works.map((works) => (
                        <div key={works.id} className={styles.WorkDisplay}>
                            {works.image.map((img: any) => (
                                <Image
                                    src={img.url}
                                    alt="Image Description"
                                    height="300"
                                    width="400"
                                    className={styles.WorkImg}
                                    key={works.id}
                                />
                            ))}
                            <div className={styles.ContentsTitle}>
                                <h2 className="ContentsTitle">{works.title}</h2>
                                <p className="ContentsDescribe">{works.describe}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </main >
    );
};
export default DisplayContents;