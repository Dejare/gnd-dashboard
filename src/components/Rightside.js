import React from 'react'
import '../App.css'
import account from '../images/account.png'
import Walletmain from './cardsComponent/Walletmain'
import Payment from './Payment'


const Rightside = () => {
    return (
        <div className= "rightside"> 
           <div className="heading">
             <p>Quit</p>
             <p>Personal</p>
             <div className = "headerImg">
                 < img src = {account} style = {{width: "2rem"}} />
             </div>
           </div>
           < Payment />
           <Walletmain/>
        </div>
    )
}

export default Rightside;
