import Goal from "./Goal";
import HowTo from "./HowTo";
import "./index.scss";
import Information from "./Information";
import Problem from "./Problem";

const Overview = () => {
  return (
    <div className="container">
      <Information />
      <Problem />
      <Goal />
      <HowTo />
    </div>
  );
};

export default Overview;
