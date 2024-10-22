import React, { useState } from "react";
import { questions } from "../qna/qustions";
import { SurveyAnswer } from "../types/surveyAnswer";
// import { calculateTotalScore } from "../utils/calculateTotalScore";

interface DisplayDataProps {
  data: SurveyAnswer[];
}

export const DisplayData: React.FC<DisplayDataProps> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // const { filteredData, totalScore } = calculateTotalScore(data);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log("All answers have been answered");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {/* <h2>Total score: {totalScore}</h2> */}
      <h1>Questions about heart diseases</h1>

      {currentQuestion && (
        <div>
          <h2>{currentQuestion.title}</h2>
          <p>{currentQuestion.question}</p>

          <button onClick={handleNextQuestion}>Next question</button>
        </div>
      )}

      {/* <ul className="cards">
        {questions.length > 0 ? (
          questions.map((question) => (
            <li key={question.id} className="question-card">
              {question.title && <h2>{question.title}</h2>}
              {question.question && <p>{question.question}</p>}
            </li>
          ))
        ) : (
          <li>No questions available</li>
        )}
      </ul> */}

      {/* <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index}>
              <p>Participant ID: {item.participantID}</p>
              <p>Answers: {item.response}</p>
              <p>Date: {item.date}</p>
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul> */}
    </div>
  );
};
