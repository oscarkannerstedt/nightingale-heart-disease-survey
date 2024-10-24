import React, { useState } from "react";
import { questions } from "../qna/qustions";
import { texts } from "../qna/answers";

interface Answer {
  text: string;
  points: number;
}

interface Question {
  id: string;
  ans1: Answer;
  ans2: Answer;
  ans3: Answer;
  ans4: Answer;
  ans5: Answer;
  ans6: Answer;
  ans7: Answer;
  ans8: Answer;
  ans9: Answer;
  ans10: Answer;
  ans11: Answer;
}

const QuestionDisplay: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Återställ valt svar för nästa fråga
    } else {
      // Hantera slutet av frågorna
      console.log("Inga fler frågor!");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswers = texts[currentQuestionIndex] as Question;
  console.log("Current Answers:", currentAnswers);

  // Hämta svarsalternativ med ans-prefix
  const answerKeys = currentAnswers
    ? Object.keys(currentAnswers).filter((key) => key.startsWith("ans"))
    : [];

  return (
    <div>
      <h2>{currentQuestion.title}</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {answerKeys.map((key) => {
          const answer = currentAnswers[key] as Answer;
          return (
            <li key={key}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer.text}
                  checked={selectedAnswer === answer.text}
                  onChange={() => setSelectedAnswer(answer.text)} // Sätt valt svar
                />
                {answer.text}
              </label>
            </li>
          );
        })}
      </ul>
      <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
        Next Question
      </button>
    </div>
  );
};

export default QuestionDisplay;
