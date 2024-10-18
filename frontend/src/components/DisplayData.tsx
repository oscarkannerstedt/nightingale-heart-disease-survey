interface Answer {
  question: string;
  response: string;
}

interface DataItem {
  id: string;
  participantID: string;
  date: string;
  answers: Answer[];
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
  }));

  return (
    <div>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id}>
              <p>ID: {item.participantID}</p>
              <p>Date: {item.date}</p>
              <p>Answers:</p>
              <ul>
                {item.answers.map((answer, index) => (
                  <li key={index}>
                    <p>Question: {answer.question}</p>
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
    </div>
  );
};
