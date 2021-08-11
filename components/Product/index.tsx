import React from 'react'
import styles from '../../styles/Products.module.scss'

const Product= () => {
    return (
        <div className={styles['product-item'] + " col-md-3"}>
            <div className={styles['product-item__img']}>
                <img className="w-100" src="https://res.cloudinary.com/hl3m5fihu/image/upload/v1/spree/products/39/small/solidus_tshirt.jpg" alt="clothing" />
            </div>
            <div className={styles['product-item__name'] + ' text-center'}>
                SOLIDUS T-SHIRT
            </div>
            <div className={styles['product-item__price'] + ' text-center'}>
                $19.99
            </div>
        </div>
    )
}

export default Product