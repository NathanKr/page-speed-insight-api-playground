import Link from "next/link";
import styles from '@/styles/top.module.css'

const Top = () => {
    return (
        <div className={styles.container}>
            <Link href='/'>home</Link>
            <Link href='/psi-push'>psi push</Link>
            <Link href='/psi-pull'>psi pull</Link>
        </div>
    );
};

export default Top;