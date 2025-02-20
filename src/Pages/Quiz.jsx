// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import questions from "../../public/questions.json"; 
import Timer from "../Components/Timer";
import Scoreboard from "../Components/Scoreboard";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerClick = (answer) => {
    const correctAnswer = String(questions[currentQuestion]?.correct).trim();
    const userAnswer = String(answer).trim();
    
    setSelectedAnswer(userAnswer);
    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setAnswers([...answers, {
      question: questions[currentQuestion]?.question,
      userAnswer: userAnswer,
      correctAnswer: correctAnswer
    }]);
    setTimeout(() => nextQuestion(), 1000);
  };

  const handleIntegerSubmit = () => {
    handleAnswerClick(userInput);
    setUserInput("");
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setQuizOver(true);
    }
  };

  if (!questions || questions.length === 0) {
    return <div className="text-center text-xl">Loading questions...</div>;
  }

  const currentQ = questions[currentQuestion];
  const isMultipleChoice = currentQ.options && currentQ.options.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!quizOver ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
          <Timer timeLeft={timeLeft} />
          <h2 className="text-lg font-bold mb-4">{currentQ?.question}</h2>
          {isMultipleChoice ? (
            <div className="grid gap-4">
              {currentQ?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`p-3 rounded-lg w-full text-left border hover:bg-blue-100 transition ${
                    selectedAnswer === option ? (option === currentQ?.correct ? "bg-green-200" : "bg-red-200") : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-4">
              <input
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="p-2 border rounded w-full"
              />
              <button
                onClick={handleIntegerSubmit}
                className="mt-2 p-2 bg-gray-700 text-white rounded w-full hover:bg-gray-900"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      ) : (
        <Scoreboard score={score} total={questions.length} answers={answers} />
      )}
    </div>
  );
};

export default Quiz;
