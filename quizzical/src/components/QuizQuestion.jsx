import QuizAnswer from './QuizAnswer'

export default function QuizQuestion({question, correct, incorrect}) {

    const randomPosition = Math.floor(Math.random() * incorrect.length)

    const allAnswers = incorrect

    allAnswers.splice(randomPosition, 0, correct)

    const answerElements = allAnswers.map((answer, index) => {
        return (
            <QuizAnswer key={index} option={answer}/>
        )
    })

    return (
        <div>
            <p>{question}</p>
            {answerElements}
        </div>
    )
}