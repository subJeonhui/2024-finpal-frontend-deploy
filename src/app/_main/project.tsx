'use client'

import styles from "./project.module.css"
import {useEffect, useRef} from "react";
import animation from "@/utils/animation";
import Image from "next/image";
import leftMessageBox from "@@/public/assets/left-message-box.svg";
import rightMessageBox from "@@/public/assets/right-message-box.svg";

export default function Project() {
    const targets = [useRef<HTMLImageElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null)
    ]

    useEffect(() => {
        let delay = 0
        targets.map((target) => {
            animation(target, delay)
            delay += 0.5
        })
    }, targets);

    return (
        <div className="page overflow-clip">
            <div className={styles.titleContainer}>
                <h1 className={styles.subtitle}>기업 정보를 더 쉽게 파악하기 위한</h1>
                <h3 className={styles.title}>대화형 AI</h3>
            </div>

            <div className={styles.animationBoxContainer}>
                <div ref={targets[0]} className={styles.animationBox}>
                    <div className="spacer"/>
                    <Image className={styles.message} src={leftMessageBox} alt=""/>
                </div>
                <div ref={targets[1]} className={styles.animationBox}>
                    <Image className={styles.message} src={rightMessageBox} alt=""/>
                    <div className="spacer"/>
                </div>
                <div ref={targets[2]} className={styles.animationBox}>
                    <div className="spacer"/>
                    <Image className={styles.message} src={leftMessageBox} alt=""/>
                </div>
                <div ref={targets[3]} className={styles.animationBox}>
                    <Image className={styles.message} src={rightMessageBox} alt=""/>
                    <div className="spacer"/>
                </div>
            </div>

        </div>
    )
}