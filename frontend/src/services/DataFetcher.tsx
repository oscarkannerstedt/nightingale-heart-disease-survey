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
  const [token, setToken] = useState<string>("");
  //const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjRPbFdwY2JSN3lGZUpVTHVqd1FrOVREWl9UayIsImtpZCI6IjRPbFdwY2JSN3lGZUpVTHVqd1FrOVREWl9UayJ9.eyJpc3MiOiJodHRwczovL2Rlc2lnbmVyLm15ZGF0YWhlbHBzLm9yZy9pZGVudGl0eXNlcnZlciIsImF1ZCI6Imh0dHBzOi8vZGVzaWduZXIubXlkYXRhaGVscHMub3JnL2lkZW50aXR5c2VydmVyL3Jlc291cmNlcyIsImV4cCI6MTcyOTI0OTA0MiwibmJmIjoxNzI5MjQ1NDQyLCJjbGllbnRfaWQiOiJNeURhdGFIZWxwcy5BNEEwRTMwNS5NeURhdGEiLCJzdWIiOiJmZDdiNmY0YS05ZjhiLWVmMTEtYmFmYS0wYWZmZTgwMjRjYWQiLCJ1c2VyX25hbWUiOiJNeURhdGFIZWxwcy5BNEEwRTMwNS5NeURhdGEiLCJyb2xlcyI6WyJSS1N0dWRpb1NlcnZpY2VBY2NvdW50IiwiUksuQTRBMEUzMDUiXSwic2NvcGUiOiJhcGkiLCJqdGkiOiJjMzJmNjAwMjI5ZTU0NTQwMDZmNTRhNzYwNDIxMDk4ZCJ9.Sm0vMXq_iGxAzFxrgmkSKqktC6nWAKZQW8q_pFfkbq_8dTzY0qz1dgDU1JrYsWCMqu3nOiH6JMK80E8YiFnTtV-f6FL0B7nmUGSoyKSJ3po-6UhdN4ujFOL0-8ajov_doh0wken51jUkp_B2znS7S1fplwfJTGGou-XQn3snuZ0xMdmg0s-WzMsyEJ_ckl01J1-Wlele5wX-EBmUiw1hsZFN6N_E2ldpYCtj2yz-pqyGN6Ko3IvUN_NI1sjKmz27gfOaxna0qQT_LC9OsLyGTwMamjsLzZidd36WMO1Mrk7GMXw13isU4JsaBbmpkeQE1QMv6sFIUQ91I0ezqPyEzw";
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
