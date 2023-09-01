import React,{useRef} from "react";
import prev from '/prev.png'
import next from '/next.png'
import styles from './Section5.module.css';
import { Link } from 'react-router-dom'

const itemArray = [
  {
    id: 1,
    image: "https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png",
    name: "Post-Poo drops",
    text: "A botanical bathroom deodoriser"
  },
  {
    id: 2,
    image: "https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png",
    name: "Aganice Aromatique Candle",
    text: "Cardamom, Mimosa, Tobacco"
  },
  {
    id: 3,
    image: "https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png",
    name: "Ptolemy Aromatique Candle",
    text: "A sensuous blend of leather, smoke and wood"
  },
  {
    id: 4,
    image: "https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png",
    name: "Callipups Aromatique Candle",
    text: "A marige of deep greens and earthy spices"
  },
  {
    id: 5,
    image: "https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png",
    name: "Bronze Incense holder",
    text: "Suited to any interior"
  },
]


export default function Section5() {
  const parentElement = useRef(null);
  const handleScrollRight = () => {
    if(parentElement) {
      const currentScrollPosition = parentElement.current.scrollLeft;
      parentElement.current.scrollLeft;
      parentElement.current.scroll({
        top: 0,
        left: currentScrollPosition - 360,
        behavior: 'smooth',
      })
    }
  };

  const handleScrollLeft = () => {
    if(parentElement) {
      const currentScrollPosition = parentElement.current.scrollLeft;
      parentElement.current.scroll({
        top: 0,
        left: (currentScrollPosition + 360),
        behavior: 'smooth',
      })
    }
  }

  return (
    <div>
      <div className={styles.s5DetailsA}>
          <h3>For the home</h3>
          <h1>Domestic pleasure</h1>
          <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
          <Link to='/'>See all homes -&gt;</Link>
      </div>
      <div className={styles.scrollContainer}>
        <button className={styles.prev} onClick={handleScrollRight}><img src={prev} alt="previous" /></button>
        <section className={styles.scroll} ref={parentElement}>
          <div className={styles.s5DetailsB}>
            <h3>For the home</h3>
            <h1>Domestic pleasure</h1>
            <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
            <Link to='/'>See all homes -&gt;</Link>
          </div>
          {itemArray.map((element) => {
            return (<div className={styles.productStyle} key={element.id}>
              <img className={styles.image} src={element.image}/>
              <Link to='/'>{element.name}</Link>
              <p>{element.text}</p>
            </div>
            );
          })}
        </section>
        <button className={styles.next} onClick={handleScrollLeft}><img src={next} alt="next" /></button>
      </div>
    </div>
  );
}