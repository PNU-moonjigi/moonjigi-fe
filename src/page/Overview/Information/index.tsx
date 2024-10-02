import { useNavigate } from "react-router-dom";
import styles from "../index.module.scss";

function Information() {
  const navigate = useNavigate();
  return (
    <div className={styles.informationContainer}>
      <h1 className={styles.title}>
        <span className={styles.highlight}>난독화</span>
        <span>에 강한</span>
        <br />
        <span className={styles.highlight}>AI</span>
        <span>기반</span>
        <span className={styles.highlight}> 웹쉘 탐지</span>
      </h1>
      <button
        className={styles.testButton}
        onClick={() => navigate("/practice")}
      >
        TEST
      </button>
      <p className={styles.testPageDescription}>
        프로젝트 설명 어쩌구 저쩌구 올랄라 야호 ~
      </p>
    </div>
  );
}

export default Information;
