import React, { useState } from "react";
import { questions } from "../qna/questions";
import { texts } from "../qna/answers";
import "../style/Survey.scss";
import { useScore } from "../hooks/useScore";
import { useNavigate } from "react-router-dom";

interface Answer {
  text: string;
  points: number;
}

const QuestionDisplay: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const { totalScore, updateScore } = useScore();
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer([]);
    } else {
      navigate("/result");
    }
  };

  const handleAnswerChange = (answerKey: string, points: number) => {
    if (selectedAnswer !== null) {
      const previousAnswer = currentAnswers?.[selectedAnswer];
      if (previousAnswer) {
        updateScore(-previousAnswer.points);
      }
    }

    setSelectedAnswer([answerKey]);
    updateScore(points);
  };

  const handleAnswerSelect = (answerText: string) => {
    const questionId = questions[currentQuestionIndex].id;
    const isMultipleChoice =
      texts[questionId - 1]?.[questionId]?.multipleChoice;

    if (isMultipleChoice) {
      setSelectedAnswer((prev) =>
        prev.includes(answerText)
          ? prev.filter((text) => text !== answerText)
          : [...prev, answerText]
      );
    } else {
      setSelectedAnswer([answerText]);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const questionId = currentQuestion.id;
  const currentAnswers = texts[questionId - 1]?.[questionId];

  // Hämta svarsalternativ med ans-prefix
  const answerKeys = currentAnswers
    ? Object.keys(currentAnswers).filter((key) => key.startsWith("ans"))
    : [];

  const isMultipleChoice = currentAnswers?.multipleChoice || false;

  console.log(currentAnswers);
  console.log(answerKeys);
  console.log(isMultipleChoice);
  console.log("totalScore", totalScore);

  return (
    <div className="home-container">
      <div className="content-box">
        <p className="current-question">
          Question {currentQuestionIndex + 1} of 33
        </p>
        <h2>{currentQuestion.title}</h2>
        <p className="question-text">{currentQuestion.question}</p>
        <div className="answer-box">
          <ul
            className={`answers ${answerKeys.length > 10 ? "two-column" : ""}`}
          >
            {answerKeys.map((key) => {
              const answer = currentAnswers?.[key];
              return (
                <li key={key}>
                  <label
                    className={`answer-item ${
                      isMultipleChoice ? "multiple-choice" : "single-choice"
                    }`}
                  >
                    <input
                      type={isMultipleChoice ? "checkbox" : "radio"}
                      name="answer"
                      value={key}
                      checked={selectedAnswer.includes(key)}
                      onChange={() => {
                        handleAnswerSelect(key);
                        if (answer) {
                          handleAnswerChange(key, answer.points);
                        }
                      }}
                      //onChange={() =>
                      //answer && handleAnswerChange(key, answer.points)
                      //}
                    />
                    {answer?.text}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer.length === 0}
          className={`survey-button ${
            selectedAnswer.length === 0 ? "disabled" : ""
          }`}
        >
          {currentQuestionIndex === questions.length - 1
            ? "Get Your Risk Score"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuestionDisplay;
