import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";

export function Quiz() {
  const { authUser, dataUser } = useContext(UserContext);
  const { push } = useHistory();
  const { category } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [data, setData] = useState([{}]);
  const [answer, setAnswer] = useState([]);

  const { username } = dataUser;

  const questions = async () => {

    try {
      const res = await axios.get(`https://getonbrdjunior-backend.herokuapp.com/api/quiz/${category}`)
      return res.data
    } catch (error) {
        if (error) return push('/')
    }
    
    
  }

  const info = () => {
    questions()
      .then((res) => {
        const values = res.questions.map((it) => {
          return {
            id: it.id,
            question: it.question,
            alternatives: it.alternatives.map((alt) => {
              return {
                id: alt.id,
                text: alt.text,
              };
            }),
          };
        });

        return setData(values);
      })
      .finally(() => {});
  };

  useEffect(() => {
    // if(!authUser) {
    //   push('/login')
    // } else {
    //   info()
    // }
    info();
  }, []);

  const postInfo = (answer) => {
    const data = {
      userId: username,
      quizes: [
        {
          category,
          questions: answer,
        },
      ],
    };

    axios.post(
      "https://getonbrdjunior-backend.herokuapp.com/api/2/answer/add",
      data
    );
  };

  const handleAnswerOptionClick = (answerOption, index) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    setAnswer([...answer, index]);

    postInfo(answer);
  };

  console.log(answer);
  console.log(category);

  return (
    <>
      <div className="quiz__app">
        {showScore ? (
          <>
            <div className="quiz__score-section">Quiz enviado.</div>
          </>
        ) : (
          <>
            <div className="quiz__question-section">
              <div className="quiz__question-count">
                <span>Pregunta {currentQuestion + 1}</span>/
                {data && data.length}
              </div>
              <div className="quiz__question-text">
                {data && data[currentQuestion].question}
              </div>
            </div>
            <div className="quiz__answer-section">
              {data.length !== 1 &&
                data[currentQuestion].alternatives.map(
                  (answerOption, index) => (
                    <button
                      className="quiz__button"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption, index)
                      }
                      key={index}
                    >
                      {answerOption.text}
                    </button>
                  )
                )}
            </div>
          </>
        )}
      </div>
      <div className="mt-5 d-flex justify-content-center">
      <Link to="/" >
        <button className="btn btn-primary btn-lg px-4 me-sm-3 text-light">
          Volver al inicio
        </button>
      </Link>

      </div>
    </>
  );
}
