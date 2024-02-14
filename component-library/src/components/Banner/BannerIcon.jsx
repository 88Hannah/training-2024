import React from 'react';
import { BannerContext } from './Banner';
import { IoWarning } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import { IconContext } from "react-icons";


export default function BannerIcon() {

    const { type } = React.useContext(BannerContext)

    let icon;
    
    switch (type) {
        case 'warning':
            icon = (
                <IconContext.Provider value={{ color: "#FBBF24", size: "20px", className: "banner__icon", title:"warning-icon" }}>
                    <IoWarning />
                </IconContext.Provider>
            )
            break;
        case 'success':
            icon = (
                <IconContext.Provider value={{ color: "#34D399", size: "20px", className: "banner__icon", title:"success-icon" }}>
                    <IoCheckmarkCircle />
                </IconContext.Provider>
            )
            break;
        case 'error':
            icon = (
                <IconContext.Provider value={{ color: "#F87171", size: "20px", className: "banner__icon", title:"error-icon" }}>
                    <IoCloseCircle />
                </IconContext.Provider>
            )
            break;
        default:
            icon = (
                <IconContext.Provider value={{ color: "#60A5FA", size: "20px", className: "banner__icon", title:"information-icon" }}>
                    <IoInformationCircle />
                </IconContext.Provider>
            )
            break;
    }

    return icon;

}