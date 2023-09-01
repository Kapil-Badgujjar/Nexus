import React from 'react'
import styles from './Section2.module.css'
export default function Section2() {
  return (
    <div className={styles.s2Container}>
      <div className={styles.s2Details}>
        <p>The Athenaeum</p>
        <h1>The warm-up</h1>
        <p>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
        <div className={styles.hollowBtn}>
            <span>Read More</span>
            <span> -&gt; </span>
        </div>
      </div>
      <img  className={styles.s2Image} src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" alt="image" />
    </div>
  )
}
