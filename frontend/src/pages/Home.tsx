import { useNavigate } from "react-router-dom";
import "../style/Home.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="home-container">
      <div className="content-box">
        <h1>
          Welcome to Nightingale project's <br /> survey about heart diseases
          <br />
          and cardiovascular history
        </h1>
        <p>
          The survey contains about 33 questions and takes about 10 mins to
          complete.
        </p>
        <p>
          Please answer as honestly as possible to get the most accurate result.
        </p>
        <button className="start-button" onClick={handleStart}>
          Start survey
        </button>
      </div>
    </div>
  );
};
