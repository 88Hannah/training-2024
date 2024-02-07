import React from 'react'
import { nanoid } from 'nanoid'
import QuizAnswer from './QuizAnswer'

export default function QuizQuestion({questionId, question, correct, incorrect, processSelection, isMarked}) {

    const [answersArray, setAnswersArray] = React.useState([])
    const [isAnswered, setIsAnswered] = React.useState(false)

    function selectAnswer(id) {
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

        if(isAnswered === false) {
            setIsAnswered(true)
        }

        
    }

    
    React.useEffect(() => {

        let answerCorrect = false
        if(answersArray.length > 0) {
            const correctlySelectedIndex = answersArray.findIndex(answer => answer.correct && answer.selected)

            if (correctlySelectedIndex > 0) {
                answerCorrect = true
            }
        }

        processSelection(questionId, isAnswered, answerCorrect)
        console.log("Are you running the answerArray useEffect?")

    }, [answersArray])



    React.useEffect(() => {
        console.log("Running")
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
        <div>
            <p>{question}</p>
            {answerElements}
        </div>
    )
}