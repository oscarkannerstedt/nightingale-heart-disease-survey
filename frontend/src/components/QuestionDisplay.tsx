import React, { useState } from "react";
import { questions } from "../qna/questions";
import { texts } from "../qna/answers";

interface Answer {
  text: string;
  points: string;
}

type QuestionAnswers = {
  [key: number]: {
    id: string;
    answers: {
      [key: string]: Answer; // assuming answer options are stored as strings
    };
  };
};


const QuestionDisplay: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log("Inga fler frågor!");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const questionId = currentQuestion.id;
  const currentAnswers = texts[questionId - 1]?.[questionId];

  // Hämta svarsalternativ med ans-prefix
  const answerKeys = currentAnswers
    ? Object.keys(currentAnswers).filter((key) => key.startsWith("ans"))
    : [];

  console.log(currentAnswers);

  console.log(answerKeys);


  return (
    <div>
      <h2>{currentQuestion.title}</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {answerKeys.map((key) => {
          const answer = currentAnswers?.[key];
          return (
            <li key={key}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answerKeys}
                  checked={selectedAnswer === answer?.text}
                  onChange={() => answer && setSelectedAnswer(answer.text)}
                />
                {answer?.text}
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
