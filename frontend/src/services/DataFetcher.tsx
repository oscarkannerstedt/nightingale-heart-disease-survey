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
  stepIdentifier: string;
}

interface ApiError {
  message: string;
}

export const DataFetcher = () => {
  const [data, setData] = useState<SurveyAnswer[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const [token, setToken] = useState<string>("");
  //const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjRPbFdwY2JSN3lGZUpVTHVqd1FrOVREWl9UayIsImtpZCI6IjRPbFdwY2JSN3lGZUpVTHVqd1FrOVREWl9UayJ9.eyJpc3MiOiJodHRwczovL2Rlc2lnbmVyLm15ZGF0YWhlbHBzLm9yZy9pZGVudGl0eXNlcnZlciIsImF1ZCI6Imh0dHBzOi8vZGVzaWduZXIubXlkYXRhaGVscHMub3JnL2lkZW50aXR5c2VydmVyL3Jlc291cmNlcyIsImV4cCI6MTcyOTUwMzc0OCwibmJmIjoxNzI5NTAwMTQ4LCJjbGllbnRfaWQiOiJNeURhdGFIZWxwcy5BNEEwRTMwNS5NeURhdGEiLCJzdWIiOiJmZDdiNmY0YS05ZjhiLWVmMTEtYmFmYS0wYWZmZTgwMjRjYWQiLCJ1c2VyX25hbWUiOiJNeURhdGFIZWxwcy5BNEEwRTMwNS5NeURhdGEiLCJyb2xlcyI6WyJSS1N0dWRpb1NlcnZpY2VBY2NvdW50IiwiUksuQTRBMEUzMDUiXSwic2NvcGUiOiJhcGkiLCJqdGkiOiI2OTQ0NTE2MDEzZjFlOGIwMmYzNmQyMzc3NTNjODcwNCJ9.ms84BjQ2ZnlEWPz2ueVv3U4ZMFabHbiUOWeHS1mXgl1opYSQhiERTjSDdNtqei5vXMb0oNtJ8Nr4ewJcGuCOC6WFEq3qjtPSku3GwTT-lwcoqmQIwV4Ltdc35da-K2rZri7ehk9rkvBCJVZ2-yRcw3GIB3-20Jxipw-RtkvxLIGfarMskR53JgSGz5GjtgX3y6Q7tOGJeqrX_2xvcPa6T_c8q7McL4bKJZmUbz_qnN7dX2bkaQeL5_VDWR5o6rfwvU0FfxQNkTMychOxcGyjye0WXSiEI7PDX3pi-LYKHsO51Bi_9Iup73DSdwIFNc8Lrk30gHPeZwXW5IPpA9G2wA";
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
      } catch (error) {
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
