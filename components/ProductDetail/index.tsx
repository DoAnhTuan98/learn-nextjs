import React from 'react'
import styles from '../../styles/ProductDetail.module.scss'

const ProductDetail = () => {
    console.log(styles)
    return (
        <div className={styles['product-page']}>
            <div className={styles['product-detail'] + ' row'}>
                <div className={styles['product-detail-img'] + ' col-md-7'}>
                    <div className={styles['product-detail-img__large']}>
                        <img className="w-100" src="https://res.cloudinary.com/hl3m5fihu/image/upload/v1/spree/products/39/small/solidus_tshirt.jpg" alt="clothing" />
                    </div>
                </div>
                <div className={styles['product-detail-info'] + ' col-md-5'}>
                    <h3 className={styles['product-detail-info__name'] + ' mb-2'}>
                        Solidus Long Sleeve
                    </h3>
                    <div className={styles['product-detail-info__desc'] + ' mb-3'}>
                        Recusandae animi deserunt provident dignissimos ullam harum alias et. Itaque dicta maxime     consectetur ut nemo non voluptatem. Voluptatem ipsum ut culpa eaque dolores.
                    </div>
                    <form className={styles['product-detail-info-variants']}>
                        <h5 className={styles['product-detail-info-variants__title'] + ' mb-3'}>
                            Variants
                        </h5>
                        <input className="mb-3 me-2" type="radio" id="id1" name="fav_language" value="HTML" />
                        <label htmlFor="id1">Size: S, Color: Black</label><br />
                        <input className="mb-3 me-2" type="radio" id="id2" name="fav_language" value="CSS" />
                        <label htmlFor="id2">Size: S, Color: White</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id3" name="fav_language" value="JavaScript" />
                        <label htmlFor="id3">Size: S, Color: Blue</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id4" name="fav_language" value="JavaScript" />
                        <label htmlFor="id4">Size: M, Color: Black</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id5" name="fav_language" value="JavaScript" />
                        <label htmlFor="id5">Size: M, Color: White</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id6" name="fav_language" value="JavaScript" />
                        <label htmlFor="id6">Size: M, Color: Blue</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id7" name="fav_language" value="JavaScript" />
                        <label htmlFor="id7">Size: L, Color: Black</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id8" name="fav_language" value="JavaScript" />
                        <label htmlFor="id8">Size: L, Color: White</label><br/>
                        <input className="mb-3 me-2" type="radio" id="id9" name="fav_language" value="JavaScript" />
                        <label htmlFor="id9">Size: L, Color: Blue</label>
                        <div className="submit">
                        <div className="price mb-3 mt-3 fw-bold fs-4">$19.99</div>
                        <div className="input-amount d-flex">
                            <input className="w-25 me-2 py-1" type="number" value={1}/>
                            <button className={styles['btn-add'] + ' py-1'} type="submit">Add To Cart</button>
                        </div>
                        </div>
                    </form>
                    <div className="product-detail-info-prperties mt-4">
                        <h5 className="product-detail-info-prperties__title mb-3">PROPERTY TYPES</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.property}>Manufacturer</td>
                                    <td className="ps-4">Wilson</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Brand</td>
                                    <td className="ps-4">Wannabe Sports</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Model</td>
                                    <td className="ps-4">TL9002</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Shirt Type</td>
                                    <td className="ps-4">Jersey</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Sleeve Type</td>
                                    <td className="ps-4">Long</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Made from</td>
                                    <td className="ps-4">100% cotton</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Fit</td>
                                    <td className="ps-4">Loose</td>
                                </tr>
                                <tr>
                                    <td className={styles.property}>Gender</td>
                                    <td className="ps-4">Men's</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="product-detail-info-related mt-4">
                        <div className="product-detail-info-related__title mb-2">Look for similar items:</div>
                        <div className="product-detail-info-related__list">
                            <a href="/" className={styles.similar + ' me-2'}>Shirts</a>
                            <a href="/" className={styles.similar}>Solidus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail