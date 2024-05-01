import styles from "./styles/FpButton.module.css"

type FpButtonProps = {
    text: string
    onClick: () => void
}

export default function FpButton(props: FpButtonProps) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.text}
        </button>
    )
}