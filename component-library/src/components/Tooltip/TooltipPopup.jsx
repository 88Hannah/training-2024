import React from 'react'
import TooltipIcon from './TooltipIcon';
import TooltipText from './TooltipText';
import TooltipTitle from './TooltipTitle';
import TooltipClose from './TooltipClose';
import { TooltipContext } from './Tooltip'

export default function TooltipPopup() {

    const {icon, color, style, title, text, open, tooltipRef} = React.useContext(TooltipContext)

    const styles = {
        display: open ? 'flex' : 'none'
    }

    return (
        <div className={`tooltip ${style} ${color}`} style={styles} ref={tooltipRef}>
            <TooltipIcon icon={icon}></TooltipIcon>
            <div>
                <TooltipTitle>{title}</TooltipTitle>
                <TooltipText>{text}</TooltipText>
            </div>
            <TooltipClose />
        </div>
    )
}