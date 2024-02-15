import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle({
    initialValue = false,
    onToggle = () => { }
}) {
    const [on, setOn] = React.useState(initialValue)

    function turnOn() {
        console.log("Setting...")
        setOn(true)
    }

    function turnOff() {
        setOn(false)
    }
    
    useEffectOnUpdate(onToggle, [on])

    return [on, turnOn, turnOff]
}