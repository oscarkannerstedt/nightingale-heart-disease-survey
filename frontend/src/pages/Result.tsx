import { useNavigate } from "react-router-dom";
import { useScore } from "../hooks/useScore";
import "../style/result.scss";
import { useEffect, useState } from "react";

export const Result = () => {
  const navigate = useNavigate();
  const { resetScore } = useScore();
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("totalScore");
    if (savedScore) {
      setTotalScore(parseInt(savedScore, 10));
    }
  }, []);

  const getRiskLevel = () => {
    if (totalScore >= -66 && totalScore <= 70) {
      return "low risk";
    } else if (totalScore >= 71 && totalScore <= 154) {
      return "moderate risk";
    } else if (totalScore >= 155 && totalScore <= 245) {
      return "high risk";
    } else if (totalScore >= 246) {
      return "very high risk";
    } else {
      return "invalid score";
    }
  };

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
        <p>
          You got {totalScore} points and are at {getRiskLevel()} of heart
          problems.
        </p>
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
