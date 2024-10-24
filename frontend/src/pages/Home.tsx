import "../style/Home.css";

export const Home = () => {
  const handleStart = () => {
    console.log("Frågorna skall dyka upp nu");
  };

  return (
    <div className="content-box">
      <h1>
        Welcome to Nightingale project's survey about heart diseases and
        cardiovascular history
      </h1>
      <p>
        The survey contains about 33 questions and takes about 10 mins to
        complete.
      </p>
      <p>
        Please answer as honestly as possible to get the most accurate result.
      </p>
      <button className="start-button" onClick={handleStart}>
        Start survey
      </button>
    </div>
  );
};
