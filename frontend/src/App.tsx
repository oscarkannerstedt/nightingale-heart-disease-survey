import { RouterProvider } from "react-router-dom";
import "./App.css";
// import { DisplayData } from "./components/DisplayData";
import QuestionDisplay from "./components/QuestionDisplay";
// import DataFetcher from "./services/DataFetcher";
import { router } from "./Router";

function App() {
  return (
    <>
      {/*<DataFetcher />*/}
      {/* <DisplayData data={[]} /> */}
      <RouterProvider router={router} />
      <QuestionDisplay />
    </>
  );
}

export default App;
