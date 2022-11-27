import React from "react";

import CardWrapper from "./CardWrapper";

const Progress = () => {
  return (
    <CardWrapper>
      <p>$89,914 of $100,000 backed</p>
      <p>5,007 total backers</p>
      <p>56 days left</p>
      <progress id="file" value="32" max="100">
        {" "}
        32%{" "}
      </progress>
    </CardWrapper>
  );
};

export default Progress;
