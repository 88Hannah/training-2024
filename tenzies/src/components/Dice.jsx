export default function Dice(props) {
    return (
        <button className={`${props.hold ? "hold" : ""} dice`} onClick={props.holdDice}>
            <span>{props.value}</span>
        </button>
    )
}