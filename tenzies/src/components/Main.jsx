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
        setDiceValues(newDice)
    }, [])

    
    const rollDice = function() {
        setDiceValues(prevDiceValues => {
            return prevDiceValues.map(prevDice => {
                return prevDice.hold ?
                    prevDice :
                    {
                        ...prevDice,
                        value: randomDice()
                    }
            })
        })
    }
    
    const holdDice = function(diceId) {
        setDiceValues(prevDiceValues => {
            return prevDiceValues.map(prevDice => {
                return prevDice.id === diceId ?
                    {
                        ...prevDice,
                        hold: !prevDice.hold
                    } :
                    prevDice
            })
        })
    }
    
    const diceElements = diceValues.map((dice) => (
        <Dice 
            value={dice.value} 
            key={dice.id} 
            holdDice={() => holdDice(dice.id)}
            hold={dice.hold}
        />
    ))
    
    return (
        <div className='container'>
            <div className='dice-container'>
                {diceElements}
            </div>
            <button className='roll-button' onClick={rollDice}>Roll dice</button>
        </div>
    )
}