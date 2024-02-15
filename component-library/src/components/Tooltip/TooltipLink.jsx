import React from 'react';
import { TooltipContext } from './Tooltip';

export default function TooltipLink({children, linkText}) {

    const { turnOn } = React.useContext(TooltipContext)

    return (
        <span className='tooltip-link' onClick={turnOn}>
            {linkText}
            {children}
        </span>
    )
}