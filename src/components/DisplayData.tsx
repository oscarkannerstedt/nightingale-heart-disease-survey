interface SurveyAnswer {
  id: string;
  participantID: string;
  date: string;
  answers: string[];
}

interface DisplayDataProps {
  data: SurveyAnswer[];
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data = [] }) => {
  console.log("Data: ", data);

  const filteredData = data.flatMap((item) =>
    item.answers.map((answer) => ({
      participantID: item.participantID,
      date: item.date,
      response: answer,
    }))
  );

  return (
    <div>
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
          <li>Ingen data tillgänglig</li>
        )}
      </ul>
    </div>
  );
};
