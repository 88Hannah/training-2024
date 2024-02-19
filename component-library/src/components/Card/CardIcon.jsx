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


export default function CardIcon({icon, color = '#3F75FE'}) {

    let reactIcon;

    if(icon?.type?.name) {
        reactIcon = 
        <IconContext.Provider value={{ color, size: "20px", className: "card__icon" }}>
            {icon}
        </IconContext.Provider>
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
        <div className='icon-container' style={{backgroundColor: color}}>
            <IconContext.Provider value={{ color: 'white', size: "24px", className: "card__icon" }}>
                {reactIcon}
            </IconContext.Provider>
        </div>
    )
}