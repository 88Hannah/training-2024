import React from 'react'
import Dice from './Dice'

export default function Main() {

    const [diceValues, setDiceValues] = React.useState([])

    const numberOfDice = 10

    const randomDice = function() {
        return Math.ceil(Math.random() * 6)
    } 

    React.useEffect(() => {
        const newDice = []
        for(let i=0; i<numberOfDice; i++) {
            newDice.push({
                value: randomDice(),
                id: i + 1,
                hold: false
            })
        }
        console.log(newDice)
        setDiceValues(newDice)
    }, [])

    
    const rollDice = function() {
        console.log("Roll the dice")
    }
    
    const holdDice = function() {
        console.log("Hold the dice")
    }
    
    const diceElements = diceValues.map((dice) => <Dice value={dice.value} key={dice.id} hold={holdDice}/>)
    
    return (
        <div className='container'>
            <div className='dice-container'>
                {diceElements}
            </div>
        </div>
    )
}