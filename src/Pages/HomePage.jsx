import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz Master!</h1>
        <p className="text-gray-700 mb-6">Test your knowledge with our fun and interactive quiz. Click the button below to start!</p>
        <Link
          to="/quiz"
          className="p-3 bg-gray-700 text-white rounded-lg w-full hover:bg-gray-900 transition block text-center"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
