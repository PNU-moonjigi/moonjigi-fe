import { useNavigate } from "react-router-dom";

function Information() {
  const navigate = useNavigate();
  return (
    <div className="information-container">
      <h1 className="title">
        <span className="highlight">난독화</span>
        <span>에 강한</span>
        <br />
        <span className="highlight">AI</span>
        <span>기반</span>
        <span className="highlight"> 웹쉘 탐지</span>
      </h1>
      <button className="test-button" onClick={() => navigate("/practice")}>
        TEST
      </button>
      <p className="test-page-description">
        프로젝트 설명 어쩌구 저쩌구 올랄라 야호 ~
      </p>
    </div>
  );
}

export default Information;
