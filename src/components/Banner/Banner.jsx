import React from 'react'
import styles from './Banner.module.css'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <div className={styles.banner}>
        <img className={styles.bannerImage} src='https://www.aesop.com/u1nb1km7t5q7/1dvhD6dW4gz1ReQeX6AOOu/0cff9578b20343e987e87db82652fa20/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_XL_5120x1856px.jpg' alt='banner image' />
        <div className={styles.bannerMenu}>
          <div className={styles.left}>Aesop</div>
          <div className={styles.right}>
            <Link to="/">Q</Link>
            <Link to="/">♥</Link>
            <Link to="/">Cart</Link>
            <Link to="/">=</Link>
          </div>
        </div>
        <div className={styles.bannerText}>
            <p className={styles.logoText}>Aeosp</p>
            <div>
                <p>Bar Soaps</p>
                <h1>A body care classic, reimagined</h1>
                <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                <div className={styles.hollowBtn}>
                    <span>Discover bar soaps</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> -&gt;</span>
                </div>
            </div>
        </div>
    </div>
  )
}
