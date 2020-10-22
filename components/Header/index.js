import styles from './index.module.css';

import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          src="/logo.png"
          alt="Desenho de uma paleta com o nome da designer em baixo"
        />
        <p>UX/UI Designer</p>
      </div>

      <div>
        <a href="/" target="_blank">
          <FaInstagram color={"#333"} size={22} />
        </a>
        <a href="/" target="_blank">
          <FaLinkedinIn color={"#333"} size={22} />
        </a>
        <a href="/" target="_blank">
          <FaWhatsapp color={"#333"} size={22} />
        </a>
      </div>
    </div>
  )
}