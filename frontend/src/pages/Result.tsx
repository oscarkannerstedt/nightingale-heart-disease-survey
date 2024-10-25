import { useNavigate } from "react-router-dom";
import { useScore } from "../hooks/useScore";
import "../style/result.scss";

export const Result = () => {
  const navigate = useNavigate();
  const { totalScore, resetScore } = useScore();

  const handleRestart = () => {
    resetScore();
    navigate("/survey");
  };

  const handleBackToHome = () => {
    resetScore();
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="content-box">
        <h1>Thank you for taking the survey!</h1>
        <p>You got {totalScore} points</p>
        <div className="buttons-group">
          <button className="handleRestartButton" onClick={handleRestart}>
            Do survey again
          </button>
          <button className="handleBackToHomeButton" onClick={handleBackToHome}>
            Home page
          </button>
        </div>
      </div>
    </div>
  );
};
