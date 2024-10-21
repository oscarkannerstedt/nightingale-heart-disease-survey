import { SurveyAnswer } from "../types/surveyAnswer";
import { calculateTotalScore } from "../utils/calculateTotalScore";

interface DisplayDataProps {
  data: SurveyAnswer[];
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data = [] }) => {
  console.log("Data: ", data);

  const { filteredData, totalScore } = calculateTotalScore(data);

  return (
    <div>
      <h1>Data from specifik user</h1>
      <h2>Total score: {totalScore}</h2>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index}>
              <p>ID: {item.participantID}</p>
              <p>Date: {item.date}</p>
              <p>Answers: {item.response}</p>
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};
