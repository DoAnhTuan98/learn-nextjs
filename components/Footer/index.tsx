import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="text-center">
                Powered by <span>Solidus</span>
            </div>
        </footer>
    )
}

export default Footer