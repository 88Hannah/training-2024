import React from 'react';
import TooltipLink from './TooltipLink';
import TooltipPopup from './TooltipPopup';
import useToggle from "../../hooks/useToggle"


const TooltipContext = React.createContext()

export default function Tooltip({children, icon, color, style, title, text}) {

    const [on, turnOn, turnOff] = useToggle({
        initialValue: false,
        onToggle: ()=> console.log("Do something")
    })
    
    const tooltipInfo = {
        icon,
        color,
        style,
        title,
        text, 
        open: on,
        turnOn,
        turnOff
    }

    return (
        
        <TooltipContext.Provider value={tooltipInfo}>
            <TooltipLink linkText={children}>
                <TooltipPopup></TooltipPopup>
            </TooltipLink>
        </TooltipContext.Provider>
         
    )
}

export { TooltipContext }