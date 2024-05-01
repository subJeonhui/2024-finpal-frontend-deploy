import styles from "./FpLink.module.css"

type FpLinkProps = {
    description: (string | null)
    linkDescription: (string | null)
    href: (string | null)
}
export default function FpLink(props: FpLinkProps) {
    return (
        <div className={styles.container}>
            <span className={styles.span}>{props.description} <a className={styles.a} href={props.href ?? ""}>{props.linkDescription}</a></span>
        </div>
    )
}