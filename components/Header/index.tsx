import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/logo.svg'
import Link from 'next/link'
import styles from '../../styles/Header.module.scss'
// import './style.scss'

const Header = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <header className={styles.header}>
            <div className={styles['header-primary']}>
                <div className={styles['header-primary-wrap']}>
                    <div className={styles['header-primary-wrap__logo']}>
                        <Image src={profilePic} alt="logo" />
                    </div>
                    <div className={styles['header-primary-wrap__search']}>
                        <form className={styles['search-bar']} onSubmit={handleSubmit}>
                            <input 
                                className={styles['search-bar__input']}
                                name="keywords"
                                placeholder="Hoodie, mug, shirt..."
                                type="text"
                            />
                            <button type="submit" className={styles['search-bar__btn']}>Search</button>
                        </form>
                    </div>
                    <div className={styles['header-primary-wrap-cart']}>
                        <Link href="/cart">
                            <a className={styles['header-primary-wrap-cart__info']}>CART: (EMPTY)</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles['header-secondary']}>
                <div className={styles['categories-navigation']}>
                    <nav className={styles['categories']}>
                        <ul className={styles['categories__list']}>
                            <li>
                                <Link href="/categories/clothing">
                                    <a>Clothing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/clothing">
                                    <a>Caps</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/clothing">
                                    <a>Bags</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/clothing">
                                    <a>Mugs</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header