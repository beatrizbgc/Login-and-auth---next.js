import styles from './loginCard.module.css'

export default function LoginCard({ tittle, children }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.tittle}> {tittle} </h3>
           {children}
        </div>
    )
}