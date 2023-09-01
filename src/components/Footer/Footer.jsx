import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={`${styles.box,styles.span2}`}>
            <p className={styles.heading}>Subscribe to Aesop communications</p>
            <hr/>
            <div className={styles.inputContainer}>
                <input type="email" placeholder="Email address" />
                <span> -&gt;</span>
            </div>
            <div className={styles.box1lastDiv}>
                <input type="checkbox" /> <span>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <Link to='/'>privacy policy.</Link></span>
            </div>
        </div>
        <div className={styles.box}>
            <p className={styles.heading}>Orders and Support</p>
            <hr />
            <ul className={styles.ul}>
                <li>Constact Us</li>
                <li>FAQs</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order History</li>
                <li>Terms and conditions</li>
            </ul>
        </div>
        <div className={styles.box}>
            <p className={styles.heading}>Services</p>
            <hr />
            <ul className={styles.ul}>
                <li>Live assistance</li>
                <li>Corporate gifts</li>
                <li>Facial Appointments</li>
                <li>Click and Collect</li>
                <li>Video consultation</li>
            </ul>
        </div>
        <div className={styles.box}>
            <p className={styles.heading}>Location preferences</p>
            <hr />
            <ul className={styles.ul}>
                <li>Shipping</li>
                <li>Hong kong SAR, China</li>
                <li>Language: </li>
                <li>English</li>
                <li>繁體中文</li>
            </ul>
        </div>
        <div className={`${styles.box,styles.span2a}`}>
            <p className={styles.heading}>Sustainability</p>
            <hr />
            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
        </div>
        <div className={styles.box}>
            <p className={styles.heading}>About</p>
            <hr />
            <ul className={styles.ul}>
                <li>Our story</li>
                <li>Foundation</li>
                <li>Creer</li>
                <li>Privacy Policy</li>
                <li>Accessibility</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
        <div className={styles.box}>
        <p className={styles.heading}>Social Media</p>
            <hr />
            <ul className={styles.ul}>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn: </li>
                <li>WeChat</li>
                <li>Weibo</li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className={styles.box}>
        &copy; Aesop
      </div>
    </div>
  )
}
