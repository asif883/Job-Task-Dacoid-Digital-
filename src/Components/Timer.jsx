/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Timer = ({ timeLeft }) => {
  return (
    <div className="text-center text-xl font-bold mb-4">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
