import { useState } from "react";

export const useScore = () => {

  const [questionScores, setQuestionScores] = useState<{ [key: number]: number }>({});
  const calculateTotalScore = () => Object.values(questionScores).reduce((acc, score) => acc + score, 0);

  const updateScore = (questionId: number, points: number) => {
    setQuestionScores((prevScores) => {
      const updatedScores = { ...prevScores, [questionId]: points };
      const newTotalScore = Object.values(updatedScores).reduce((acc, score) => acc + score, 0);
      localStorage.setItem("totalScore", newTotalScore.toString());
      console.log(`Updating score for question ${questionId}: points=${points}, newTotalScore=${newTotalScore}`);
      return updatedScores;
    });
  };

  const resetScore = () => {
    setQuestionScores({});
    localStorage.removeItem("totalScore");
  };

  const totalScore = calculateTotalScore();

  return { totalScore, questionScores, updateScore, resetScore };
};
