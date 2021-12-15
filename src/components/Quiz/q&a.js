
import axios from 'axios';

export const questions = async () => {
    const res = await axios.get(`https://getonbrdjunior-backend.herokuapp.com/api/quiz/frontend`)
    return res.data
}


// export const questions = {
//   "questions":
//   [
//   {
//     questionText: 'El lenguaje HTML funciona por medio de:',
//     answerOptions: [
//       { answerText: 'Funciones', isCorrect: false },
//       { answerText: 'Clases', isCorrect: false },
//       { answerText: 'Etiquetas', isCorrect: true },
//       { answerText: 'Ninguna', isCorrect: false },
//     ],
//   },
//   {
//     questionText: '¿Cúal es la version más actual de HTML?',
//     answerOptions: [
//       { answerText: 'html 2', isCorrect: false },
//       { answerText: 'html 5', isCorrect: true },
//       { answerText: 'html 8.5', isCorrect: false },
//       { answerText: 'html v4.1.0', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'En HTML las etiquetas <h1>, <h2>, <h3> se emplean para definir:',
//     answerOptions: [
//       { answerText: 'Encabezados', isCorrect: true },
//       { answerText: 'Hipervinculos', isCorrect: false },
//       { answerText: 'Listas', isCorrect: false },
//       { answerText: 'Tablas', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'El DOCTYPE para HTML es:',
//     answerOptions: [
//       { answerText: '<!DOCTYPE html5>', isCorrect: false },
//       { answerText: '<!DOCTYPE html-5>', isCorrect: false },
//       { answerText: '<!DOCTYPE h>', isCorrect: false },
//       { answerText: '<!DOCTYPE html>', isCorrect: true },
//     ],
//   },
// ]};