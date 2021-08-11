import React from 'react'
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'
import styles from '../../styles/Cart.module.scss'

const Cart = () => {
    return (
        <MainLayout>
            <div className={styles.cart}>
                <div className={styles['cart-container']}>
                    <form>
                        <div className={styles['cart-header']}>
                            <h1 className={styles['cart-header__title']}>Shopping Cart</h1>
                            <div className={styles['cart-header__update']}>
                                <button>Update</button>
                            </div>
                        </div>
                        <div className={styles['cart-items']}>
                            <div className={styles['cart-item']}>
                                <div className={styles['cart-item__img']}>
                                    <img src="https://res.cloudinary.com/hl3m5fihu/image/upload/v1/spree/products/17/small/solidus_long_white.png" alt="t-shirt" />
                                </div>
                                <div className={styles['cart-item-info']}>
                                    <div className={styles['cart-item-info__name']}>Solidus Long Sleeve</div>
                                    <div className={styles['cart-item-info__size']}>Size:S, Color: White</div>
                                    <div className={styles['cart-item-info__desc']}>Recusandae animi deserunt provident dignissimos ullam harum alias et. Itaque dicta maxime...</div>
                                </div>
                                <div className={styles['cart-item__price'] + ' px-2'}>
                                    $19.99
                                </div>
                                <div className={styles['cart-item__quantity']}>
                                    <input type="number" value={1} />
                                </div>
                                <div className={styles['cart-item__total'] + ' px-2'}>
                                    $19.99
                                </div>
                                <div className={styles['cart-item__remove']}>
                                    <span>Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['cart-footer']}>
                            <span className="cart-footer__total px-3">
                                Total: <strong>$39.98</strong>
                            </span>
                            <span className={styles['cart-footer__checkout']}>
                                <button className="py-2 px-3">Checkout</button>
                            </span>
                        </div>
                    </form>
                    <div className={styles['cart-coupon']}>
                        <form className="d-flex">
                            <div className="cart-coupon__input me-2">
                                <input type="text" placeholder="Coupon code" className="px-1 py-1" />
                            </div>
                            <div className={styles['cart-coupon__btn']}>
                                <button className="py-2 px-3">Apply code</button>
                            </div>
                        </form>
                    </div>
                    <div className="cart-actions d-flex align-items-center mt-5">
                        <div className={styles['cart-actions__continue']}>
                            <Link href="/products">
                                <a>Continue shopping</a>
                            </Link>
                        </div>
                        <div className="mx-1">or</div>
                        <div className={styles['cart-actions-empty']}>
                            <span>Empty Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart
