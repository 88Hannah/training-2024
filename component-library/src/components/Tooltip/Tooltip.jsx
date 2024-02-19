import React from 'react';
import TooltipLink from './TooltipLink';
import TooltipPopup from './TooltipPopup';
import useToggle from "../../hooks/useToggle"


const TooltipContext = React.createContext()

export default function Tooltip({children, icon, color, style, title, text}) {

    const [on, turnOn, turnOff] = useToggle({initialValue: false})
    
    const tooltipRef = React.useRef(null);

    const tooltipInfo = {
        icon,
        color,
        style,
        title,
        text, 
        open: on,
        turnOn,
        turnOff,
        tooltipRef
    }


    const handleOutsideClick = (e) => {
        if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
            turnOff();
        }
      };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });

    return (
        
        <TooltipContext.Provider value={tooltipInfo}>
            <span className='tooltip-container'>
                <TooltipLink linkText={children}>
                </TooltipLink>
                <TooltipPopup></TooltipPopup>
            </span>
        </TooltipContext.Provider>
         
    )
}

export { TooltipContext }