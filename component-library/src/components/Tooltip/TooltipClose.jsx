import React from 'react'
import { TooltipContext } from './Tooltip'
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

export default function TooltipClose() {

    const { turnOff } = React.useContext(TooltipContext)

    return (
        <button className='tooltip__close' onClick={turnOff}>
            <IconContext.Provider value={{ size: "24px", className: "close-icon" }}>
                <IoClose />
            </IconContext.Provider>
        </button>
    )
}