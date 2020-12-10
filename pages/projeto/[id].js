import { useRouter } from 'next/router';

import styles from './index.module.css';
export default function Project() {
  const router = useRouter();
  console.log(router.query)

  return (
    <div className={styles.projeto}>
      <p>{`Este é o projeto de índice número ${router.query.id}`}</p>
    </div>
  )
}