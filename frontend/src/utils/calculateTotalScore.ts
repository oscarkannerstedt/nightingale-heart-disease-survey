import { SurveyAnswer } from "../types/surveyAnswer";
import { extractNumberFromString } from "./utils";

export const calculateTotalScore = (data: SurveyAnswer[]) => {
  const filteredData = data.flatMap((item) =>
    item.answers.map((answer) => ({
      participantID: item.participantID,
      date: item.date,
      response: answer,
      score: extractNumberFromString(answer),
    }))
  );

  const totalScore = filteredData.reduce((sum, item) => sum + item.score, 0);

  return { filteredData, totalScore };
};
