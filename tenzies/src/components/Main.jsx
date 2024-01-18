import React from 'react'
import Dice from './Dice'
import Confetti from 'react-confetti'

export default function Main() {
    const numberOfDice = 10

    const randomDice = function() {
        return Math.ceil(Math.random() * 6)
    } 

    const [diceValues, setDiceValues] = React.useState(diceSetup())

    const [gameComplete, setGameComplete] = React.useState(false)


    function diceSetup() {
        const newDice = []
        for(let i=0; i<numberOfDice; i++) {
            newDice.push({
                value: randomDice(),
                id: i + 1,
                hold: false
            })
        }
        return newDice;
    }


    React.useEffect(() => {
        const removeTimeOut = setTimeout(() => {
            const firstNotHeld = diceValues.find(dice => !dice.hold)
            if (!firstNotHeld) {
                let complete = true;
                diceValues.forEach(dice => {
                    if (dice.value != diceValues[0].value) {
                         complete = false;
                         return
                    } 
                })
                if (complete) {
                    setGameComplete(true)
                }
            }
        }, 700)

        return () => clearTimeout(removeTimeOut)
    }, [diceValues])


    const rollDice = function() {
        if(gameComplete) {
            setDiceValues(diceSetup())
            setGameComplete(false)
        } else {
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
        <main>
            {gameComplete && <Confetti />}
            <div className='container'>
                <div className='intro-text'>
                    <h1>Tenzies</h1>
                    <p>Keep rolling untill all the dice are the same value. Click each die to freeze it between rolls.</p>
                </div>
                <div className='dice-container'>
                    {diceElements}
                </div>
                <button 
                    className='roll-button' 
                    onClick={rollDice}>
                        {gameComplete ? 'New game' : 'Roll dice'}
                </button>
            </div>
        </main>
    )
}