import React from "react";

const Stat = ({ stat, support }) => {
  return (
    <div className="mb-6">
      <p className="text-black text-4xl font-bold mb-3">{stat}</p>
      <p className="text-gray-dark">{support}</p>
    </div>
  );
};

export default Stat;
