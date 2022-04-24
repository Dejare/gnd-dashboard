import {useEffect, useRef, useState} from 'react'
import '../../App.css'

function Centercard({cryptoAsset, bg, imgSrc, cryptoAssetValue, cryptoAssetValueUSD, alt}) {

    return (  
            <div className="card" style = {{backgroundColor: `${bg}`}}>
        <div className="heading">
            <h5>{cryptoAsset}</h5>
            <div className="dot">
            <div className="dot1"></div>
            
            <div className="dot2"></div>

            
            <div className="dot3"></div>
            </div>
        </div>
        <div className="img">
        <img src={imgSrc} alt={alt}/>
        </div>
        <div id="dropDown" style = {{backgroundColor: `${bg}`}}>
            <div id="cancelDropDown">&times;</div>
            <div className="dropDownBg">
            <a href ="#"><p>Send</p></a>
            <a href ="#"> <p>Recieve</p></a>
            <a href ="#">   <p>Hide Balance</p></a>
            </div>
        </div>
        {/* VALUEES  */}
        <div className = "cryptoValues">
        <h4>{cryptoAssetValue}</h4>
        <h5>{cryptoAssetValueUSD}</h5>
        </div>
        </div>
    )
}

export default Centercard
