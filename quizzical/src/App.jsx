import React from 'react'
import QuizQuestion from './components/QuizQuestion'

function App() {

  const [quizStarted, setQuizStarted] = React.useState(false)

  const [quizData, setQuizData] = React.useState([])

  
  // React.useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
  //     .then(res => res.json())
  //     .then(data => setQuizData(data.results))
  // }, [])




  const quizQuestions = quizData?.map((question, index) => {
    return (
      <QuizQuestion 
        key={index} 
        question={question.question} 
        correct={question.correct_answer} 
        incorrect={question.incorrect_answers}/>
    )
  })

  const startQuiz = function() {
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
      .then(() => setQuizStarted(true))

  }
    
  console.log(quizData)


  return (
    <>

      {!quizStarted && 
        <div>
          <h1>Hello</h1>
          <button onClick={startQuiz}>Let's play!</button>
        </div>}
      {quizStarted &&
        <div>
          {quizQuestions}
        </div>
      }

    </>
  )
}

export default App
