import React from 'react'
import './left.scss'

const Leftcards = ({text, imgSrc, func}) => {
    return (
       
        <div className="leftcard" onClick={func}>
            <div className="bg">
                <img src = {imgSrc} />
            </div>
            <p>{text}</p>
        </div>
      
    )
}

export default Leftcards
