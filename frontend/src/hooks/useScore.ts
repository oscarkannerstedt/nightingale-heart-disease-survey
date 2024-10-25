import { useState } from "react";

export const useScore = () => {
  const [totalScore, setTotalScore] = useState<number>(() => {
    const storedScore = localStorage.getItem("totalScore");
    return storedScore ? Number(storedScore) : 0;
  });

  const updateScore = (points: number) => {
    setTotalScore((prevScore) => {
      const newScore = prevScore + points;
      localStorage.setItem("totalScore", newScore.toString());
      return newScore;
    });
  };

  const resetScore = () => {
    setTotalScore(0);
    localStorage.removeItem("totalScore");
  };

  return { totalScore, updateScore, resetScore };
};
