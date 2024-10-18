import { useEffect, useState } from "react";
import axios from "axios";
import { DisplayData } from "../components/DisplayData";

interface SurveyAnswer {
  id: string;
  date: string;
  participantID: string;
  answers: Array<{
    question: string;
    response: string;
  }>;
}

interface ApiError {
  message: string;
}

export const DataFetcher = () => {
  const [data, setData] = useState<SurveyAnswer[]>([]);
  const [error, setError] = useState<ApiError | null>(null);

  const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
  const projectId = "8e890f0c-9ec0-49e7-a413-19812cade812";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/projects/${projectId}/surveyanswers?limit=25`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        );
        setData(response.data.surveyAnswers);
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
