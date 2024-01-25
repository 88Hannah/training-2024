import React from 'react'
import { nanoid } from 'nanoid'
import QuizQuestion from './components/QuizQuestion'
import tempData from './tempData'

function App() {

  const [quizStarted, setQuizStarted] = React.useState(false)

  const [quizData, setQuizData] = React.useState([])

  const [score, setScore] = React.useState(0)

  const [displayMessage, setDisplayMessage] = React.useState("")
  
  const [isMarked, setIsMarked] = React.useState(false)

  
  // React.useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
  //     .then(res => res.json())
  //     .then(data => setQuizData(data.results))
  // }, [])


  // To do ...
  // Let the app know if the answers are correct or not
  // show a score

  function processSelection(questionId, answered, correct) {
    setQuizData(prevQuizData => {
      return prevQuizData.map(prevQuestion => {
        return prevQuestion.id === questionId ?
          {
            ...prevQuestion,
            answered,
            correct
          } :
          { ...prevQuestion }
      })
    })

  }

  const quizQuestions = quizData?.map((question) => {
    return (
      <QuizQuestion 
        key={question.id} 
        questionId={question.id} 
        question={question.question} 
        correct={question.correct_answer} 
        incorrect={question.incorrect_answers}
        processSelection={processSelection}/>
    )
  })

  const startQuiz = function() {
    // fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    //   .then(res => res.json())
    //   .then(data => {

    //     const newQuizData = data.results.map(question => (
    //       {
    //         ... question,
    //         id: nanoid(),
    //         answered: false,
    //         correct: null
    //       }
    //     ))
    //     setQuizData(newQuizData)

    //   }
    //   )
    //   .then(() => setQuizStarted(true))
    //   .catch((error) => {
    //     console.error("Not good!")
    //     console.log(error)
    //     setQuizData(tempData())
    //     setQuizStarted(true)
    //   });

    setQuizData(tempData())
    setQuizStarted(true)

  }
    
  // console.log(quizData)

  function markAnswers() {
    const uncomplete = quizData.findIndex(question => question.answered === false)

    console.log(uncomplete)

    if (uncomplete >= 0) {
      setDisplayMessage("You haven't answered all the questions yet!")
    } else {
      let correctCount = 0;

      quizData.forEach(question => {
        if(question.correct) {
          correctCount++
        }
      })

      setIsMarked(true)
      setDisplayMessage(`You got ${score} out of ${quizData.length} correct!`)
      console.log("This is running ...")
      setScore(correctCount)
      console.log(correctCount)
    }
  }



  return (
    <>

      {!quizStarted && 
        <div>
          <h1>Hello</h1>
          <button onClick={startQuiz}>Let's play!</button>
        </div>}
      {quizStarted &&
        <div className={isMarked ? 'marked' : ''}>
          {quizQuestions}
          <button onClick={markAnswers}>Submit</button>
          {displayMessage && <p>{displayMessage}</p>}
        </div>
      }

    </>
  )
}

export default App
