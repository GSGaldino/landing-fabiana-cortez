import { useState } from 'react';
import styles from './index.module.css';

import Title from '../Title';

import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';


export default function Projetos() {
  const [x, setX] = useState(0);

  const goLeft = () => {
    setX(x === 0 ? x - 100 : x + 100);
  }

  const goRight = () => {
    setX(x < 0 ? x + 100 : x - 100);
  }

  return (
    <div className={styles.projetos}>
      <Title text="Projetos"/>
      <div className={styles.carousel}>

        <div className={styles.slider} style={{ transform: `translateX(${x}%)` }}>
          <div className={styles.item}>
            <img src="/projeto1.jpg" />
            <img src="/projeto2.jpg" />
            <img src="/projeto2.jpg" />
          </div>
          <div className={styles.item}>
            <img src="/projeto1.jpg" />
            <img src="/projeto1.jpg" />
            <img src="/projeto2.jpg" />
          </div>
        </div>
        
        <button onClick={goLeft} className={`${styles.carouselButton} ${styles.previous}`}>
          <IoMdArrowDropleft
            size={30}
            color={"#333"}
          />
        </button>
        <button onClick={goRight} className={`${styles.carouselButton} ${styles.next}`}>
          <IoMdArrowDropright
            size={30}
            color={"#333"}
          />
        </button>
      </div>
    </div>
  )
}
