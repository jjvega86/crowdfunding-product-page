import CardWrapper from "./CardWrapper";
import Stat from "./Stat";
import StatRule from "./StatRule";
import ProgressBar from "./ProgressBar";

import { useContext } from "react";
import { PledgeContext } from "../context/PledgeContext";

const ProjectStats = () => {
  const { backers, raised } = useContext(PledgeContext);
  let dollarUSLocale = Intl.NumberFormat("en-US");
  let progressPercentage = (raised / 100000) * 100;

  return (
    <CardWrapper>
      <div className="text-gray-dark flex flex-col sm:flex-row sm:justify-evenly sm:my-8">
        <Stat
          stat={`$${dollarUSLocale.format(raised)}`}
          support={"of $100,000 backed"}
        />
        <StatRule />
        <Stat
          stat={backers.toLocaleString("en-US")}
          support={"total backers"}
        />
        <StatRule />
        <Stat stat={"56"} support={"days left"} />
      </div>
      <ProgressBar percentage={`${progressPercentage}%`} />
    </CardWrapper>
  );
};

export default ProjectStats;
