import React, { useState } from "react";

const RealTime = ({ time, greeting }) => {
  return (
    <div className="my-4 text-2xl flex justify-between text-green-500">
      <h4>{time.toLocaleTimeString()}</h4>
      <h4 className="text-yellow-300">{greeting}</h4>
      <h4>{time.toLocaleDateString("en-US", { weekday: "long" })}</h4>
    </div>
  );
};

export default RealTime;
