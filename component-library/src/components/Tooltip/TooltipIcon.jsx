import { IoAccessibilityOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoBalloonOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import { IoPizzaOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IconContext } from "react-icons";


export default function TooltipIcon({icon}) {

    let reactIcon;

    if(icon?.type?.name) {
        reactIcon = icon

    } else {
        switch(icon) {
            case 'accessibility':
                reactIcon = <IoAccessibilityOutline />
                break;
            case 'airplane':
                reactIcon = <IoAirplaneOutline />
                break;
            case 'balloon':
                reactIcon = <IoBalloonOutline />
                break;
            case 'bulb':
                reactIcon = <IoBulbOutline />
                break;
            case 'calendar':
                reactIcon = <IoCalendarNumberOutline />
                break;
            case 'cloud':
                reactIcon = <IoCloudUploadOutline />
                break;
            case 'paw':
                reactIcon = <IoPawOutline />
                break;
            case 'pizza':
                reactIcon = <IoPizzaOutline />
                break;
            case 'rocket':
                reactIcon = <IoRocketOutline />
                break;
            default:
                reactIcon = <IoChatbubbleEllipsesOutline />
                break;
        }
    }
    
    return (
            <IconContext.Provider value={{ size: "24px", className: "tooltip__icon" }}>
                {reactIcon}
            </IconContext.Provider>
    )
}