import React, { useState } from "react";
import { questions } from "../qna/qustions";
import { SurveyAnswer } from "../types/surveyAnswer";
import { texts } from "../qna/answers";
// import { calculateTotalScore } from "../utils/calculateTotalScore";

interface Answer {
  id: number;
  text: string;
}

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

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const getAnswersForCurrentQuestion = () => {
    const questionId = currentQuestion.id;
    return Object.values(texts).filter(
      (answer: Answer) => answer.id === questionId
    );
  };

  const currentAnswers = getAnswersForCurrentQuestion();

  return (
    <div>
      {/* <h2>Total score: {totalScore}</h2> */}
      <h1>Questions about heart diseases</h1>

      {currentQuestion && (
        <div>
          <h2>{currentQuestion.title}</h2>
          <p>{currentQuestion.question}</p>

          {currentAnswers.length > 0 && (
            <ul>
              {currentAnswers.map((answerObj: Answer, index: number) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={answerObj.text}
                      onChange={() => handleAnswerSelect(answerObj.text)}
                      checked={selectedAnswer === answerObj.text}
                    />
                    {answerObj.text}
                  </label>
                </li>
              ))}
            </ul>
          )}

          <button onClick={handleNextQuestion}>Next question</button>
        </div>
      )}
    </div>
  );
};
