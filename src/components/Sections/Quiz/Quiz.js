import React, { useState } from 'react';
import {questions} from './q&a';
import axios from 'axios';

export function Quiz() {
  	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz__app'>
			{showScore ? (
				<div className='quiz__score-section'>
					Respuetas correctas {score} de {questions.length}
				</div>
			) : (
				<>
					<div className='quiz__question-section'>
						<div className='quiz__question-count'>
							<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='quiz__question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='quiz__answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quiz__button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
