import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.css'
export default function Product(props) {
  return (
    <div>
        <div className={styles.productStyle}>
            <img className={styles.productImage} src={props.item.src} alt="product image" />
            <Link to='/'>{props.item.linkName}</Link>
            <p>{props.item.text}</p>
        </div>
    </div>
  )
}
