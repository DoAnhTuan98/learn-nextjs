import React from 'react'
import Product from '../Product'
import styles from '../../styles/Products.module.scss'

const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles['products-container'] + ' container'}>
                <div className={styles['products-list'] + ' row'}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Products