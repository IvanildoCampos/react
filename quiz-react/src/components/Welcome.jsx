import Quiz from "../img/quiz.svg";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h1>Seja bem vindo</h1>
      <p>click no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
        Iniciar
      </button>
      <img src={Quiz} alt="inicio do quiz" />
    </div>
  )
}

export default Welcome