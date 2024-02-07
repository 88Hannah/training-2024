import React from 'react'
import { nanoid } from 'nanoid'
import QuizAnswer from './QuizAnswer'

export default function QuizQuestion({questionId, question, correct, incorrect, processSelection, isMarked}) {

    const [answersArray, setAnswersArray] = React.useState([])
    const [currentAnswerId, setCurrentAnswerId] = React.useState("")

    function selectAnswer(id) {
        if (currentAnswerId != id) {
            setCurrentAnswerId(id)
            
            setAnswersArray(prevAnswersArray => (
                prevAnswersArray.map(answer => {
                    return answer.id === id ?
                        {
                            ...answer,
                            selected: true
                        } :
                        {
                            ...answer,
                            selected: false
                        }
                })
            ))
        } 
    }

    
    React.useEffect(() => {

        if(currentAnswerId) {
            const correctlySelectedIndex = answersArray.findIndex(answer => answer.correct && answer.selected)
            let answerCorrect = correctlySelectedIndex >= 0 ? true : false
            processSelection(questionId, currentAnswerId, answerCorrect)
        }

    }, [answersArray])


    React.useEffect(() => {
        console.log("Running the use effect in start up for each quiz question")
        const randomPosition = Math.floor(Math.random() * incorrect.length)
    
        const allAnswers = [...incorrect]
    
        allAnswers.splice(randomPosition, 0, correct)

        setAnswersArray(allAnswers.map(answer => (
            {
                answer: answer,
                correct: answer === correct ? true : false,
                id: nanoid(),
                selected: false
            }
        )))
    }, [])

    const allowSelectAnswer = function(id) {
        return isMarked ? null : () => selectAnswer(id)
    }
    
    const answerElements = answersArray.map(answer => (
            <QuizAnswer 
                key={answer.id} 
                option={answer.answer}
                selectAnswer={allowSelectAnswer(answer.id)}
                selected={answer.selected}
                correct={answer.correct}/>
        )
    )
    

    return (
        <div className='quiz-question'>
            <p>{question}</p>
            <div className='question-answers'>
                {answerElements}
            </div>
        </div>
    )
}