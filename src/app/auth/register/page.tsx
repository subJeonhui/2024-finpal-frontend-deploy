'use client'

import {useState} from "react";
import FpInput from "@/components/FpInput";
import FpButton from "@/components/FpButton";
import FpLink from "@/components/styles/FpLink";
import styles from "./register.module.css"

export default function Register() {
    let [id, setId] = useState('')
    let [password, setPassword] = useState('')
    let [passwordCheck, setPasswordCheck] = useState('')
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
                    <FpInput placeholder="Password" state={[passwordCheck, setPasswordCheck]} type={"password"}/>
                    <FpButton text={"Sign In"} onClick={signInButtonAction}/>
                </div>
                <div className={styles.linkContainer}>
                    <FpLink description={"이미 계정이 있으신가요?"} linkDescription={"로그인"}
                            href={"/auth/signIn"}/>
                </div>
            </div>
        </div>
    );
}