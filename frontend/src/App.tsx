import "./App.css";
import { DisplayData } from "./components/DisplayData";
import DataFetcher from "./services/DataFetcher";

function App() {
  return (
    <>
      {/*<DataFetcher />*/}
      <DisplayData data={[]} />
    </>
  );
}

export default App;