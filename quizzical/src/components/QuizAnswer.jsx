export default function QuizAnswer(props) {

    return (
        <button 
            onClick={props.selectAnswer}
            className={`option ${props.selected ? 'selected' : ''} ${props.correct ? 'correct' : ''}`}>
                {props.option}
        </button>
    )
}