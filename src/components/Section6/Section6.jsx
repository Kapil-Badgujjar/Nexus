import React from 'react'
import styles from './Section6.module.css'
export default function Section6() {
  return (
    <div className={styles.s6Container}>
      <div className={styles.s6Details}>
        <p>Store Locator</p>
        <h1>The warm-up</h1>
        <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
        <div className={styles.hollowBtn}>
            <span>Find a nearby store -&gt;</span>
        </div>
      </div>
      <img  className={styles.s6Image} src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" alt="image" />
    </div>
  )
}
