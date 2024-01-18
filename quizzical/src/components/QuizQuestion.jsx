import React from 'react'
import { nanoid } from 'nanoid'
import QuizAnswer from './QuizAnswer'

export default function QuizQuestion({question, correct, incorrect}) {

    const [answersArray, setAnswersArray] = React.useState([])

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
    }


    React.useEffect(() => {
        console.log("Running")
        const randomPosition = Math.floor(Math.random() * incorrect.length)
    
        const allAnswers = incorrect
    
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
    
    const answerElements = answersArray.map(answer => (
            <QuizAnswer 
                key={answer.id} 
                option={answer.answer}
                selectAnswer={() => selectAnswer(answer.id)}
                selected={answer.selected}/>
        )
    )
    

    return (
        <div>
            <p>{question}</p>
            {answerElements}
        </div>
    )
}