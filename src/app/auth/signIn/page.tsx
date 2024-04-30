'use client'

import {useState} from "react";
import FpInput from "@/app/components/FpInput";
import FpButton from "@/app/components/FpButton";
import FpLink from "@/app/components/FpLink";
import styles from "./signIn.module.css"

export default function Auth() {
    let [id, setId] = useState('')
    let [password, setPassword] = useState('')
    let signInButtonAction = () => {
    }

    return (
        <div className="page">
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>로그인</h1>
                    <h3 className={styles.description}>이메일과 비밀번호를 입력해주세요</h3>
                </div>
                <div className={styles.inputContainer}>
                    <FpInput placeholder="Email" state={[id, setId]} type={"text"}/>
                    <FpInput placeholder="Password" state={[password, setPassword]} type={"password"}/>
                    <FpButton text={"Sign In"} onClick={signInButtonAction}/>
                </div>
                <div className={styles.linkContainer}>
                    <FpLink description={"비밀번호를 잃어버리셨나요?"} linkDescription={"비밀번호 변경"}
                            href={"/auth/signup"}/>
                    <FpLink description={"계정이 없으신가요?"} linkDescription={"회원가입"} href={"/auth/signup"}/>
                </div>
            </div>
        </div>
    );
}