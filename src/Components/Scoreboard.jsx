/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Scoreboard = ({ score, total, answers }) => {
    return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <p className="text-lg mt-4">Your Score: {score} / {total}</p>
        <div className="mt-6 text-left">
          <h3 className="text-xl font-bold mb-2">Review Answers:</h3>
          {answers.map((item, index) => (
            <div key={index} className="mb-4 p-3 border rounded-lg">
              <p className="font-semibold">Q{index + 1}: {item.question}</p>
              <p className={`mt-1 ${item.userAnswer === item.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                Your Answer: {item.userAnswer || "No Answer"}
              </p>
              <p className="text-blue-600">Correct Answer: {item.correctAnswer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Scoreboard;
