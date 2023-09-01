import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.left}>
            
            <Link className={`${styles.navbarLinks,styles.show}`} to="/">Shop</Link>
            <Link className={styles.navbarLinks} to="/">Skin Care</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Body & Hand</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Hair</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Fragrance</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Home</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Kits & Travel</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Gifts</Link>
            <Link className={styles.navbarLinks} to="/">Read</Link>
            <Link className={styles.navbarLinks} to="/">Store</Link>
            <Link className={`${styles.navbarLinks,styles.hide}`} to="/">Facial Appointments</Link>
            <Link className={styles.navbarLinks} to="/">Q</Link>
        </div>
        <div className={styles.right}>
            <Link className={styles.navbarLinks} to="/">Login</Link>
            <Link className={styles.navbarLinks} to="/">Cabinet</Link>
            <Link className={styles.navbarLinks} to="/">Cart</Link>
        </div>
    </div>
  )
}
