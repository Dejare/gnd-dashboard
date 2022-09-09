import React from 'react'
import '../App.scss'
import Maincard from './cardsComponent/Maincard'
import settings from '../images/settings.svg'
import Lacards from './cardsComponent/Lacards'
import insurance from '../images/insurance.png'
import electricity from '../images/ered.png'
import Search from './functionalities/Search'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsCheckSquare } from 'react-icons/bs'


const Center = () => {

    const history = useHistory()

    function handleClick() {
        history.push = "/savings";
        alert("clicked")
    }
    const latestPayments = useSelector((state) => state.payment)
    return (
        <div className="center">
            <Search />
            <div className="greetingText">
                <h1>Hi, <span>Adejare.</span></h1>
            </div>
            < Maincard />
            <div className="flex flex-row mx-12 justify-between">
                <div className="aText bold"><h1>Latest Activities</h1>
                    <p>Updated 12 minutes ago</p>
                </div>
                <div className="totalBg">
                    <div className="bg">
                        <img src={settings} onClick={handleClick} alt="Settings" />
                    </div>
                    <div className="abtn">
                        <button>+</button>
                    </div>
                </div>
            </div>
            {latestPayments.map((latest) => {
                return (
                    <Lacards imgSrc={<BsCheckSquare />} laone={latest.narration} laonep="Property Coverage" latwo={`${latest.coin} Wallet`} latwop="Personal Account" lathree={latest.date} lathreep="Last Payment" lafour={`-${latest.amount}${latest.coin}`} lafourp="Balance" />
                )
            })}

            <Lacards
                imgSrc={electricity} imgBg="#f5cdcd" laone="Electricity" laonep="Utility Payment" latwo="ETH Wallet" latwop="Personal Account" lathree="9 Jun, 21" lathreep="Last Payment" lafour="-3.24ETH" lafourp="Balance" />

        </div>
    )
}

export default Center
