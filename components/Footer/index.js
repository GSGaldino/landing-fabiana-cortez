import {FaEnvelope} from 'react-icons/fa';

import styles from './index.module.css';

export default function Footer(){
  const Li = ({icon, text}) => {
    return (
      <div className={styles.item}>
        <div className={styles.icon}>
          {icon}
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    )
  }
  return (
    <div className={styles.footer}>
      <Li icon={<FaEnvelope />} text="fabianacortezmazo16@outlook.com" />
    </div>
  )
}
