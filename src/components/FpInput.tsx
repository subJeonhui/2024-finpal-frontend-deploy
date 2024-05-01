'use client'

import {Dispatch, SetStateAction, useState} from "react";
import styles from "./styles/FpInput.module.css"

type FpInputProps = {
    placeholder: string
    state: [string, Dispatch<SetStateAction<string>>]
    type: string
}

export default function FpInput(props: FpInputProps) {

    return (
        <div className={styles.container}>
            <input className={styles.input} type={props.type} required/>
            <label className={styles.label}> {props.placeholder} </label>
        </div>
    )
}