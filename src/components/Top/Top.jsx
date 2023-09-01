import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Top.module.css'
export default function Top() {
  return (
    <div>
      <div className={styles.d1}>
      Trained Aesop consultations are available to provide bespoke skin care advise. <Link to="/">Book Video Consultation</Link>
      </div>
      <div className={styles.d2}>
        <Link to="/">Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 +</Link>
      </div>
    </div>
  )
}
