import React from "react";
import RandomForest from "./RandomForest";
import SVM from "./SVM";
import XGBoost from "./XGBoost";

const Evaluation: React.FC = () => {
  return (
    <>
      <RandomForest/>
        <SVM/>
        <XGBoost/>
    </>
  );
};

export default Evaluation;
