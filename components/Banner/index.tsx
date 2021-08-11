import styles from '../../styles/Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles['banner-container']}>
                <div className={styles['banner-content']}>
                    <h1 className={styles['banner-content__headtitle']}>
                        The only eCommerce platform you’ll ever need.
                    </h1>
                    <p className={styles['banner-content__desc']}>Build, customize and scale your store with no limits or license fees. Solidus is the free, open-source eCommerce framework for digitally-native brands, fast-growing online businesses and pragmatic developers.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner