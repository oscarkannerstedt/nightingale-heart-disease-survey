import React, { useState } from "react";
import { questions } from "../qna/questions";
import { texts } from "../qna/answers";
import "../style/Survey.scss";
import { useScore } from "../hooks/useScore";
import { useNavigate } from "react-router-dom";

const QuestionDisplay: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const { totalScore, questionScores, updateScore } = useScore();
  const { } = useScore();
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
    const questionId = questions[currentQuestionIndex].id;
    const isMultipleChoice = (texts as { [key: number]: any })[questionId - 1]?.[questionId]?.multipleChoice;


    setSelectedAnswer((prev) => {
      if (isMultipleChoice) {
        if (prev.includes(answerKey)) {
          updateScore(questionId, (questionScores[questionId] || 0) - points);
          return prev.filter((answer) => answer !== answerKey);
        } else {
          updateScore(questionId, (questionScores[questionId] || 0) + points);
          return [...prev, answerKey];
        }
      } else {
        updateScore(questionId, points);
        return [answerKey];
      }
    });
  };

  const currentQuestion = questions[currentQuestionIndex];
  const questionId = currentQuestion.id;
  const currentAnswers = (texts as { [key: number]: any })[questionId - 1]?.[questionId]?.answers;

  const answerKeys = currentAnswers
    ? Object.keys(currentAnswers).filter((key) => key.startsWith("ans"))
    : [];

  const isMultipleChoice = (texts as { [key: number]: any })[questionId - 1]?.[questionId]?.multipleChoice || false;

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
          <ul className={`answers ${answerKeys.length > 6 ? 'two-column' : ''}`}>
            {answerKeys.map((key) => {
              const answer = currentAnswers?.[key];
              return (
                <li key={key}>
                  <label
                    className={`answer-item ${isMultipleChoice ? "multiple-choice" : "single-choice"
                      }`}
                  >
                    <input
                      type={isMultipleChoice ? "checkbox" : "radio"}
                      name={`answer-${questionId}`}
                      value={key}
                      checked={selectedAnswer.includes(key)}
                      onChange={() => {
                        if (answer) {
                          handleAnswerChange(key, answer.points);
                        }
                      }}
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
          className={`survey-button ${selectedAnswer.length === 0 ? "disabled" : ""
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
