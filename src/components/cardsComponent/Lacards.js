import React from 'react'
import '../../App.scss'
const Lacards = ({imgSrc, laone, laonep, latwo, latwop, lathree, lathreep, lafour, lafourp,imgBg}) => {
    return (
        <div className="lacards">
            <div className="laImg" style={{backgroundColor: `${imgBg}`}}>
                <img src = {imgSrc} />
            </div>
            <div className="la-one">
                <h4>{laone}</h4>
                <p>{laonep}</p>
            </div>
            <div className="la-two">
            <h4>{latwo}</h4>
                <p>{latwop}</p>
            </div>
            <div className="la-three">
            <h4>{lathree}</h4>
                <p>{lathreep}</p>
            </div>
            <div className="la-four"><h4>{lafour}</h4>
                <p>{lafourp}</p></div>
        </div>
    )
}

export default Lacards
