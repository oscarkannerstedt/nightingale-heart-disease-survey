import { RouterProvider } from "react-router-dom";
import "./App.css";
import { DisplayData } from "./components/DisplayData";
import DataFetcher from "./services/DataFetcher";
import { router } from "./Router";

function App() {
  return (
    <>
      {/*<DataFetcher />*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
