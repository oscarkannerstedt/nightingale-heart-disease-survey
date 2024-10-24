import QuestionDisplay from "../components/QuestionDisplay"
import "../style/Survey.scss";

export const Survey = () => {
    return <>
        Survey
        <div className="home-container">
            <div className="content-box">
                <QuestionDisplay />
            </div>
        </div>
    </>
}