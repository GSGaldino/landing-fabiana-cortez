import Link from 'next/link';

import { useState } from 'react';
import styles from './index.module.css';

import Title from '../Title';

import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const data = [
  {
    src: '/projeto1.jpg',
    alt: 'Projeto 1',
  },
  {
    src: '/projeto1.jpg',
    alt: 'Projeto 1',
  },
  {
    src: '/projeto2.jpg',
    alt: 'Projeto 2',
  },
  {
    src: '/projeto2.jpg',
    alt: 'Projeto 2',
  },
  {
    src: '/projeto2.jpg',
    alt: 'Projeto 2',
  },
  {
    src: '/projeto1.jpg',
    alt: 'Projeto 1',
  }
];


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
      <Title text="Projetos" />
      <div className={styles.carousel}>

        <div className={styles.slider} style={{ transform: `translateX(${x}%)` }}>
          <div className={styles.item}>
            {data.map((item, index) => {
              if (index >= 3) {
                return null
              }
              return (
                <div className={styles.box} key={index}>
                  <Link href={`projeto/${index}`}>
                    <img src={item.src} alt={item.alt} />
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={styles.item}>
            {data.map((item, index) => {
              if (index <= 2) {
                return null
              }
              return (
                <div className={styles.box} key={index}>
                  <Link href={`projeto/${index}`}>
                    <img src={item.src} alt={item.alt} />
                  </Link>
                </div>
              )
            })}
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
