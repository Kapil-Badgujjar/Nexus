import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Section7 from './components/Section7/Section7';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import Top from './components/Top/Top';
function App() {

  return (
    <div className={styles.app}>
      <Top />
      <Navbar />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  )
}

export default App