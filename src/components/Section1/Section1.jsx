import React from 'react'
import styles from './Section1.module.css'
import Product from '../ProductItem/Product'
export default function Section1() {

    const data =  [
        {
            id: 1,
            src: "https://www.niche-beauty.com/images/generated/det/43/99/aesop-nurture-bar-soap.jpg",
            linkName: "Nature Bar Soap",
            text: "Offers a mild yet effective cleaness"
        },
        {
            id: 2,
            src:"https://www.niche-beauty.com/images/generated/det/43/99/aesop-nurture-bar-soap.jpg",
            linkName: "Nature Bar Soap",
            text: "Offers a mild yet effective cleaness"
        },
        {
            id: 3,
            src: "https://www.niche-beauty.com/images/generated/det/43/99/aesop-nurture-bar-soap.jpg",
            linkName: "Nature Bar Soap",
            text: "Offers a mild yet effective cleaness"
        }
    ]
  return (
    <div className={styles.Section1}>
        <div className={styles.Section1Info}>
            <span>For the body</span>
            <h2>An expression of care</h2>
            <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
            <div className={styles.hollowBtn}>
                <span>See all body care</span>
                <span> -&gt;</span>
            </div>
        </div>
        <div className={styles.products}>
        {data.map(item => (
            <div key={item.id}>
                <Product item={item} />
            </div>
        ))}
        </div>
    </div>
  )
}
