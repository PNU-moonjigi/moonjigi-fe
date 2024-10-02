function HowTo() {
  return (
    <div className="how-to-container">
      <h2 className="how-to-title">
        But HOW ?&nbsp;<span className="emoji">👀</span>
      </h2>
      <div className="step-area">
        <div className="how-to-box">
          <div className="number">1</div>
          <div className="text-box">난독화된 php 파일을 비난독화</div>
        </div>
        <div className="how-to-box">
          <div className="number">2</div>
          <div className="text-box">
            비난독화된 파일 및 일반 파일로부터
            <br />
            AST, opcode 추출
          </div>
        </div>
        <div className="how-to-box">
          <div className="number">3</div>
          <div className="text-box">TextRank 기반 알고리즘 구현</div>
        </div>
        <div className="how-to-box">
          <div className="number">4</div>
          <div className="text-box">
            머신러닝을 이용한
            <br />
            성능평가 수행 및 시각화
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
