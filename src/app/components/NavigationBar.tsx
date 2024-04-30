'use client'

import styles from './NavigationBar.module.css';
import logo from "@@/public/finpal-logo.svg";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function NavigationBar() {

    const router = useRouter()
    const moveToSignInPage = () => {
        router.push('/auth/signIn')
    }

    return (
        <nav className={styles.nav}>
            <Link href="/"><Image priority={true} className={styles.logo} src={logo} alt=""/></Link>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>프로젝트 소개</li>
                    <li className={styles.li}>팀 소개</li>
                    <li className={styles.li}>데이터셋</li>
                </ul>
                <button onClick={moveToSignInPage} className={styles.signInButton}>
                    로그인
                </button>
            </div>
        </nav>
    );
}