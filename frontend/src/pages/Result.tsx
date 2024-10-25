import { useNavigate } from "react-router-dom";
import { useScore } from "../hooks/useScore";

export const Result = () => {
  const navigate = useNavigate();
  const { totalScore } = useScore();

  const handleRestart = () => {
    navigate("/survey");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="content-box">
        <h1>Thank you for taking the survey!</h1>
        <p>resultat skall komma här! {totalScore}</p>
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
