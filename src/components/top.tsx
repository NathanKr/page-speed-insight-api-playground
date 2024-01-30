import Link from "next/link";
import styles from '@/styles/top.module.css'

const Top = () => {
    return (
        <div className={styles.container}>
            <Link href='/'>home</Link>
            <Link href='/psi-realtime'>realtime</Link>
            <Link href='/psi-offline'>offline</Link>
        </div>
    );
};

export default Top;