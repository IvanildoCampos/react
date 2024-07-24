import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "../components/Option";
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[0];

  const onSelectOption = (option) => {
     dispatch({
      type: "CHECK_ANSWER",
      playload: {answer: currentQuestion.answer, option},
     })
  }

  return (
    <div  id="question">
      <p>
        pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option 
          Option={option} 
          key={option} 
          answer={currentQuestion.answer}
          SelectOption={() => onSelectOption(option)}/>
        ))}
      </div>
      {quizState.answerSelect && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>continuar</button>
      )}
    </div>
  )
}

export default Question
