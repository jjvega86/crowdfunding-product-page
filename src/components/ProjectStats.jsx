import React from "react";

import CardWrapper from "./CardWrapper";
import Stat from "./Stat";
import StatRule from "./StatRule";
import ProgressBar from "./ProgressBar";

const ProjectStats = () => {
  return (
    <CardWrapper>
      <div className="text-gray-dark flex flex-col">
        <Stat stat={"$89,000"} support={"of $100,000 backed"} />
        <StatRule />
        <Stat stat={"5,007"} support={"total backers"} />
        <StatRule />
        <Stat stat={"56"} support={"days left"} />
        <ProgressBar percentage={"89%"} />
      </div>
    </CardWrapper>
  );
};

export default ProjectStats;
