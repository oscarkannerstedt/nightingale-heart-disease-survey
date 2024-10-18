import { useEffect, useState } from "react";
import axios from "axios";
import { DisplayData } from "../components/DisplayData";

interface SurveyAnswer {
  id: string;
  date: string;
  participantID: string;
  answers: string[];
}

interface ApiError {
  message: string;
}

export const DataFetcher = () => {
  const [data, setData] = useState<SurveyAnswer[]>([]);
  const [error, setError] = useState<ApiError | null>(null);

  const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
  const projectId = "8e890f0c-9ec0-49e7-a413-19812cade812";
  const targetParticipantID = "5fd544f3-7719-423a-b885-25aa3cbaf916";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/projects/${projectId}/surveyanswers`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        );

        console.log("API response: ", response.data);

        const filteredData = response.data.surveyAnswers.filter(
          (answer: SurveyAnswer) => answer.participantID === targetParticipantID
        );

        setData(filteredData);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError({ message: error.message });
        } else {
          setError({ message: "Ett okänt fel inträffade." });
        }
        console.log("error fetching from api", error);
      }
    };

    fetchData();
  }, [accessToken]);

  if (error) return <div>Fel: {error.message}</div>;

  return (
    <div>
      <h1>Data från API:</h1>
      <DisplayData data={data} />
    </div>
  );
};

export default DataFetcher;
