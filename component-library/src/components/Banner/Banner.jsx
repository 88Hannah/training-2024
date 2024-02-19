import React from 'react'
import BannerIcon from './BannerIcon'

const BannerContext = React.createContext()

export default function Banner({ children, type }) {

    return (
        <BannerContext.Provider value={{type: type}}>
            <div className={`banner ${type}`}>
                <BannerIcon />
                <div>
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
   
    )
}

export { BannerContext }