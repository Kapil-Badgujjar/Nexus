import React,{useRef} from "react";
import prev from '/prev.png'
import next from '/next.png'
import styles from './Section3.module.css';
import { Link } from "react-router-dom";

const itemArray = [
  {
    id: 1,
    image: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    name: "Lucent Facial Concentrate",
    text: "A vitamin C-rich layering serum"
  },
  {
    id: 2,
    image: "https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png",
    name: "Purifying Facial Cream Cleanser",
    text: "A daily cream cleanser for dry skin"

  },
  {
    id: 3,
    image: "https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png",
    name: "Camelia Nut Facial Hydrating cream",
    text: "For normal dry and sensetive skin"
  },
  {
    id: 4,
    image: "https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png",
    name: "Parsley seed anti-oxident eye cream",
    text: "Nourishes delicate skin around eyes"
  },
  {
    id: 5,
    image: "https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png",
    name: "B triple C Facial Balancing gel",
    text: "Anti-Oxident gel infused with vitamin B and C"
  },
  {
    id: 6,
    image: "https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png",
    name: "Mandarian Facial Hydrating cream",
    text: "Rapidly absorbed, lightly hydrating"
  },
  {
    id: 7,
    image: "https://www.aesop.com/u1nb1km7t5q7/SFLFFcSkkuEojFBCs26Xo/97bb554badcd4f5265b972bed612b2ac/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Intense-Serum-60mL-Web-Large-684x668px.png",
    name: "Parsley seed anti oxident intese serum",
    text: "A hydrating serum to bolster skin"
  },
  {
    id: 8,
    image: "https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png",
    name: "Parsley seed facial cleanser",
    text: "For those in polluted urban environments"
  },
]


export default function Section3() {
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
      <div className={styles.s3DetailsA}>
          <h3>For the skin</h3>
          <h1>Attention for all types</h1>
          <p>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
          <Link to='/'>See all skin care -&gt;</Link>
      </div>
      <div className={styles.scrollContainer}>
        <button className={styles.prev} onClick={handleScrollRight}><img src={prev} alt="previous" /></button>
        <section className={styles.scroll} ref={parentElement}>
        <div className={styles.s3DetailsB}>
          <h3>For the skin</h3>
          <h1>Attention for all types</h1>
          <p>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
          <Link to='/'>See all skin care -&gt;</Link>
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