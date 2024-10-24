// import React, { useState } from "react";
// import { questions } from "../qna/qustions";
// import { SurveyAnswer } from "../types/surveyAnswer";
// import { texts } from "../qna/answers";
// // import { calculateTotalScore } from "../utils/calculateTotalScore";

// interface Answer {
//   text: string;
//   points: number;
// }

// interface QuestionAnswers {
//   id: string;
//   ans1?: Answer;
//   ans2?: Answer;
//   ans3?: Answer;
//   ans4?: Answer;
//   ans5?: Answer;
//   ans6?: Answer;
//   ans7?: Answer;
//   ans8?: Answer;
//   ans9?: Answer;
//   ans10?: Answer;
//   ans11?: Answer;
//   ans12?: Answer;
//   ans13?: Answer;
//   ans14?: Answer;
//   ans15?: Answer;
//   ans16?: Answer;
//   ans17?: Answer;
//   ans18?: Answer;
//   ans19?: Answer;
//   ans20?: Answer;
//   ans21?: Answer;
//   ans22?: Answer;
//   ans23?: Answer;
//   ans24?: Answer;
//   ans25?: Answer;
//   ans26?: Answer;
//   ans27?: Answer;
//   ans28?: Answer;
//   ans29?: Answer;
//   ans30?: Answer;
//   ans31?: Answer;
//   ans32?: Answer;
//   ans33?: Answer;
// }

// type TextsArray = Array<{ [key: number]: QuestionAnswers }>;

// /*
// interface DisplayDataProps {
//   data: SurveyAnswer[];
// }
// */

// export const DisplayData: React.FC = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

//   // const { filteredData, totalScore } = calculateTotalScore(data);

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null);
//     } else {
//       console.log("All answers have been answered");
//     }
//   };

//   const handleAnswerSelect = (answer: string) => {
//     setSelectedAnswer(answer);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const getAnswersForCurrentQuestion = () => {
//     const questionId = currentQuestion.id;

//     const matchingQuestion = texts.find((text) => text[Number(questionId)]);

//     if (matchingQuestion) {
//       const answersObject = matchingQuestion[Number(questionId)] as QuestionAnswers; // Access the answers for the matched question

//       // Use Object.values to get answers and filter for valid answer objects
//       return Object.values(answersObject).filter(
//         (answer: any) => typeof answer === 'object' && answer.text // Only return answer objects
//       );
//     }

//     return [];
//   };

//   const currentAnswers = getAnswersForCurrentQuestion();

//   return (
//     <div>
//       {/* <h2>Total score: {totalScore}</h2> */}
//       <h1>Questions about heart diseases</h1>

//       {currentQuestion && (
//         <div>
//           <h2>{currentQuestion.title}</h2>
//           {currentQuestion.question && <p>{currentQuestion.question}</p>}

//           {currentAnswers.length > 0 && (
//             <ul>
//               {currentAnswers.map((answerObj: Answer, index: number) => (
//                 <li key={index}>
//                   <label>
//                     <input
//                       type="radio"
//                       name="answer"
//                       value={answerObj.text}
//                       onChange={() => handleAnswerSelect(answerObj.text)}
//                       checked={selectedAnswer === answerObj.text}
//                     />
//                     {answerObj.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <button onClick={handleNextQuestion}>Next question</button>
//         </div>
//       )}
//     </div>
//   );
// };
