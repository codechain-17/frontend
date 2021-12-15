import React, { useState, useEffect } from "react";
import { questions } from "./q&a";

export function Quiz() {
  	
	const [currentQuestion, setCurrentQuestion] = useState(0);
  	const [showScore, setShowScore] = useState(false);
  	const [score, setScore] = useState(0);
  	const [data, setData] = useState([{}]);
	const [answer, setAnswer] = useState({})
	
  const info = () => {
		questions()
			.then(res => {
				const values = res.questions.map((it) => {
					return {
						id: it.id,
						question: it.question,
						alternatives: it.alternatives.map((alt) => {
							return {
								id: alt.id,
								text: alt.text
							}
						})	
					}
				})
				
				return setData(values)
			})
			.finally(() => {'fin'})
	}

  useEffect(() => {
	  info()
  }, [])
  
  const handleAnswerOptionClick = () => {


 const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
   
	
	
	<div className="quiz__app">
      {showScore ? (
        <div className="quiz__score-section">
			Quiz enviado.
          {/* Respuetas correctas {score} de {data && data.length} */}
        </div>
      ) : (
        <>
		
          <div className="quiz__question-section">
            <div className="quiz__question-count">
              <span>Pregunta {currentQuestion + 1}</span>/{data && data.length}
            </div>
            <div className="quiz__question-text">
              {data && data[currentQuestion].question}
            </div>
          </div>
         <div className="quiz__answer-section">
            {data.length !== 1  && data[currentQuestion].alternatives.map((answerOption, index) => (
              <button
                className="quiz__button"
                onClick={() => handleAnswerOptionClick(index)}
				key={index}
              >
                {answerOption.text}
              </button>
            ))}			
          </div>    
		 
        </>
      )}
    </div>
  );
}
