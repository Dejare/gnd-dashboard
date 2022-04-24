import React from 'react'
import Leftcards from './Leftcards'
import './left.css'
import flower from '../../images/flower.png'
import calculator from '../../images/calculator.png'
import wallets from '../../images/wallets.png'
import savings from '../../images/savings.png'
import food from '../../images/food.png'
import health from '../../images/health.svg'
import account from '../../images/account.png'
import currencies from '../../images/currencies.png'
import electricity from '../../images/electricity.png'
import security from '../../images/security.svg'
import dashboard from '../../images/dashboard.png'


const Mainleft = () => {
    return (
        <div className="mainLeft">
            <Leftcards text = "Dashboard"  imgSrc={dashboard}/>
            <Leftcards  text = "Calculator"  imgSrc={calculator} />
            <Leftcards  text = "Wallets" imgSrc={wallets} />
            <Leftcards  text = "Savings" imgSrc={savings} />
            <Leftcards  text = "Currencies" imgSrc={currencies} />
            <Leftcards text = "Security" imgSrc={security}  />
            <Leftcards text = "Upcoming" imgSrc={electricity} />
            <Leftcards text = "Food" imgSrc={food} />
            <Leftcards text = "Health" imgSrc={health} />
            <Leftcards text = "Account" imgSrc={account} />


            <div className="leftBanner">
            < img src = {flower} alt = "GO PRO"/>
            <button>Go Pro</button>
            </div> 
        </div>
    )
}

export default Mainleft
