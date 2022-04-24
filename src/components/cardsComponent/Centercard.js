import {useEffect, useRef, useState} from 'react'
import '../../App.scss'
import {AiOutlineSync, AiOutlineMenu} from 'react-icons/ai'

function Centercard({cryptoAsset, bg, imgSrc, cryptoAssetValue, cryptoAssetValueUSD, alt}) {
    const dropdown = useRef()
    const balance = useRef()
    const balanceCrypto = useRef()

    const [Balance, setBalance] = useState(false)

    function showDropdown() {
        dropdown.current.style.display = "block"
    }
    function closeDropdown(){
        dropdown.current.style.display = "none"
    }
    function trust() {
        balance.current.innerHTML= '******'
        balanceCrypto.current.innerHTML= '*********'
        setBalance(true)
    }
    function show() {
        balance.current.innerHTML = `${cryptoAssetValueUSD}`
        balanceCrypto.current.innerHTML= `${cryptoAssetValue}`
        setBalance(false)
    }


    return (  
            <div className="card" style = {{backgroundColor: `${bg}`}}>
        <div className="heading">
            <h5>{cryptoAsset}</h5>
            <div className="dot">
                <AiOutlineMenu onClick={showDropdown}/>
            </div>
        </div>
        <div className="img">
        <img src={imgSrc} alt={alt}/>
        </div>
        <div id="dropDown" style = {{backgroundColor: `${bg}`, display: `${null}`}} ref={dropdown}>
            <div id="cancelDropDown" onClick={closeDropdown}>&times;</div>
            <div className="dropDownBg" onClick={closeDropdown}>
            <a href ="#"><p>Send</p></a>
            <a href ="#"> <p>Recieve</p></a>
            {
                Balance ? 
                <a href ="#" onClick={show}><p>Show Balance</p></a>
                :
                <a href ="#" onClick={trust}><p>Hide Balance</p></a>
            }
  
            </div>
        </div>
        {/* VALUEES  */}
        <div className = "cryptoValues">
        <h4 className="bold"ref={balanceCrypto}>{cryptoAssetValue}</h4>
        <h5 ref={balance}>{cryptoAssetValueUSD}</h5>
        </div>
        </div>
    )
}

export default Centercard
