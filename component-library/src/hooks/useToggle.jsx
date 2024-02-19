import React from "react"

export default function useToggle({initialValue = false}) {

    const [on, setOn] = React.useState(initialValue)

    function turnOn() {
        setOn(true)
    }

    function turnOff() {
        setOn(false)
    }

    return [on, turnOn, turnOff]
}