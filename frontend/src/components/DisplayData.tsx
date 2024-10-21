import React from 'react'
import { questions } from "../qna/qustions";

interface Answer {
  question: string;
  response: string;
}

interface DataItem {
  id: string;
  participantID: string;
  date: string;
  answers: Answer[];
  stepIdentifier: string;
}

interface DisplayDataProps {
  data: DataItem[];
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data = [] }) => {
  console.log("Data: ", data);

  const filteredData = data.map((item) => ({
    id: item.id,
    participantID: item.participantID,
    date: item.date,
    answers: item.answers,
    stepIdentifier: item.stepIdentifier,
  }));

  return (
    <div>
      <ul className='cards'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <li key={question.id} className='question-card'>
              {question.title && <h2>{question.title}</h2>}
              {question.question && <p>{question.question}</p>}
            </li>
          ))
        ) : (
          <li>No questions available</li>
        )}
      </ul>
      {/*
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id}>
              <p>Participant ID: {item.participantID}</p>
              <p>Date: {item.date}</p>
              <ul>
                {item.answers.map((answer, index) => (
                  <li key={index}>
                    <p>Question: {getQuestionByIndex(index)}</p>
                    <p>Response: {answer.response}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>Ingen data tillgänglig</li>
        )}
      </ul>
      */}
    </div >
  );
};
