import React from 'react'
import './left.css'

const Leftcards = ({text, imgSrc}) => {
    return (
        <div className="leftcard">
            <div className="bg">
                <img src = {imgSrc} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Leftcards
