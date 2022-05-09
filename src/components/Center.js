import React from 'react'
import '../App.scss'
import Maincard from './cardsComponent/Maincard'
import settings from '../images/settings.svg'
// import eth from '../images/eth.png'
import Lacards from './cardsComponent/Lacards'
import insurance from '../images/insurance.png'
// import e from '../images/e.png'
import electricity from '../images/ered.png'
import Search from './functionalities/Search'
import { useHistory } from 'react-router-dom'


const Center = () => {

    const history = useHistory()

    function handleClick() {
        history.push="/savings";
        alert("clicked")
    }
    return (
        <div className="center">
            <Search/>
            <div className="greetingText">
                <h1>Hi, <span>Adejare.</span></h1>
            </div>
            < Maincard /> 
            <div className="activityHeading">
                <div className="aText bold"><h1>Latest Activities</h1>
            <p>Updated 12 minutes ago</p>
            </div>
            <div className="totalBg">
            <div className="bg">
                <img src = {settings} onClick={handleClick}/>
                </div>
               <div  className="aBtn">
               <button>+</button>
            </div>
            </div>
            </div>
            < Lacards imgSrc={insurance} laone="Insurance" laonep="Property Coverage" latwo ="LTC Wallet" latwop="Personal Account" lathree="7 Jun, 21" lathreep="Last Payment" lafour="-10.24LTC" lafourp="Balance" />
            
            < Lacards  
           imgSrc={electricity} imgBg= "#f5cdcd" laone="Electricity" laonep="Utility Payment" latwo ="ETH Wallet" latwop="Personal Account" lathree="9 Jun, 21" lathreep="Last Payment" lafour="-3.24ETH" lafourp="Balance" />
        </div>
    )
}

export default Center
