import React from "react";

import CardWrapper from "./CardWrapper";
import Stat from "./Stat";
import StatRule from "./StatRule";
import ProgressBar from "./ProgressBar";

const ProjectStats = () => {
  return (
    <CardWrapper>
      <div className="text-gray-dark flex flex-col sm:flex-row sm:justify-evenly sm:my-8">
        <Stat stat={"$89,000"} support={"of $100,000 backed"} />
        <StatRule />
        <Stat stat={"5,007"} support={"total backers"} />
        <StatRule />
        <Stat stat={"56"} support={"days left"} />
      </div>
      <ProgressBar percentage={"89%"} />
    </CardWrapper>
  );
};

export default ProjectStats;
