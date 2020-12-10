import Title from '../Title';

import styles from './index.module.css';

export default function Skills() {
  const Skill = ({ text, percent, color }) => {
    return (
      <div className={styles.skill}>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <div className={styles.percent}>
          <div
            className={styles.bar}
            style={{
              width: `${percent}%`,
              background: `${color}`,
            }}
          >
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.skills}>

      <div className={styles.containerSkills}>
        <Title
          text="Skills"
        />
        <Skill color="#3D2277" text="Figma" percent={90} />
        <Skill color="#C2C55D" text="Games" percent={15} />
        <Skill color="#cb9037" text="Photoshop" percent={80} />
        <Skill color="#933F3F" text="Café" percent={97} />
        <Skill color="#56AEAE" text="HTML" percent={17} />
        <Skill color="#20ABD7" text="Javascript" percent={10} />
        <Skill color="#739BB9" text="Ler" percent={100} />
        <Skill color="#933F7B" text="CSS" percent={25} />
      </div>
    </div>
  )
}
