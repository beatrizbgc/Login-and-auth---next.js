import styles from '../button/button.module.css'

export default function Button({children, ...props }) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
        
        )}