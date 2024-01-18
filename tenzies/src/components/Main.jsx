import React from 'react'
import Dice from './Dice'

export default function Main() {

    const [diceValues, setDiceValues] = React.useState([])

    const [gameComplete, setGameComplete] = React.useState(false)

    const numberOfDice = 10

    const randomDice = function() {
        return Math.ceil(Math.random() * 6)
    } 

    // React.useEffect(() => {
    //     const newDice = []
    //     for(let i=0; i<numberOfDice; i++) {
    //         newDice.push({
    //             value: randomDice(),
    //             id: i + 1,
    //             hold: false
    //         })
    //     }
    //     setDiceValues(newDice)
    // }, [])

    if(diceValues.length === 0) {
        newGameSetup()
    }

    function newGameSetup() {
        const newDice = []
        for(let i=0; i<numberOfDice; i++) {
            newDice.push({
                value: randomDice(),
                id: i + 1,
                hold: false
            })
        }
        setDiceValues(newDice)
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
                    console.log("Game finished")
                    setGameComplete(true)
                }
            }
        }, 700)

        return () => clearTimeout(removeTimeOut)
    }, [diceValues])

    
    const rollDice = function() {
        if(gameComplete) {
            newGameSetup()
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
    )
}