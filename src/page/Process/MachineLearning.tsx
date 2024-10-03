import styles from "./index.module.scss";

const ML = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h2 className={styles.highlight}>Machine Learning</h2>
        <ul className={styles.listItem}>
          <li className={styles.list}>
            TextRank
            <p className={styles.description}>
              난독화된 php 파일을 비난독화어쩌구저쩌구 추가설명
            </p>
          </li>
          <li className={styles.list}>
            TextRank
            <p className={styles.description}>
              난독화된 php 파일을 비난독화어쩌구저쩌구 추가설명
            </p>
          </li>
          <li className={styles.list}>
            TextRank
            <p className={styles.description}>
              난독화된 php 파일을 비난독화어쩌구저쩌구 추가설명
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ML;
