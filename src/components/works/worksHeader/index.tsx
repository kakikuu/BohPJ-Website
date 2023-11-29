import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css';

const WorksHeader: React.FC = () => {
    return (
        <div className={styles['works-header']}>
            <p className={styles['works-header__title']}>Works</p>
            <Image
                src="/images/background-works-header.png"
                alt=""
                width="1450"
                height="800"
                className={styles['works-header__background-image']}
            />
        </div>
    );
}

export default WorksHeader;
