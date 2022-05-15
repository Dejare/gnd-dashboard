import React,{useEffect, useState} from 'react'
import Walletcards from '../Walletcards'
import ethereum from '../../images/ethereum.svg'
import { BallTriangle } from 'react-loader-spinner'

const Walletmain = () => {

    const [Data, setData] = useState(null)
    const [Load, setLoad] = useState(false)
const apiKey = "bd9aa8a7e087001528a4349bbf18b357bca0e261";

    useEffect(() => {
        fetch( `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,LTC,DAI&interval=1d&convert=USD&per-page=100&page=1`, {headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"            
        }})
        .then(res=> res.json())
        .then(answer=> {
            console.log(answer);
            setData(answer);
            setLoad(true);
        })
       
    }, [])
    console.log(Data)
    return (
        <div>
            {Load ? (
                <div>
                    <div className="walletHeading">
                        <Walletcards coinname = {Data[0].currency} amount = {Math.ceil(Data[0].price)} increase = {Data[0]["1d"].price_change_pct} fullcoinname = {Data[0].name} sideImg = {Data[0].logo_url} />
                        <Walletcards coinname = {Data[1].currency} amount = {Math.ceil(Data[1].price)}  increase = {Data[1]["1d"].price_change_pct} fullcoinname = {Data[1].name} sideImg = {Data[1].logo_url} />
                        <Walletcards coinname = {Data[2].currency} amount = {Math.ceil(Data[2].price)} increase = {Data[2]["1d"].price_change_pct} fullcoinname = {Data[2].name} sideImg = {Data[2].logo_url} />
                        <Walletcards coinname = {Data[3].currency} amount = {Math.ceil(Data[3].price)}  increase = {Data[3]["1d"].price_change_pct} fullcoinname = {Data[3].name} sideImg = {Data[3].logo_url} />
                    </div>
                </div>
            ) : (
                <div className="loader flex justify-center content-center items-center p-8">
                    <BallTriangle color="#1f1f1f" height={60} width={60} />
                </div>
            )}
            
        </div>
    )
}
    //         {Load ? Data.map((data)=>{
    //             <Walletcards coinname= {data.id} fullcoinname={data.name} increase={data.price_change_pct}/>
    //         }): <BallTriangle/>}
    //         {/* <Walletcards coinname = "BTC" amount="37" fullcoinname="Bitcoin" increase="+7.4"/>
    //         <Walletcards coinname = "LTC" amount="23" fullcoinname="Litecoin" increase="+3.4"/>
    //         <Walletcards coinname = "ETH" amount="15" sideImg={ethereum} fullcoinname="Ethereum" increase="+17.4"/>
    //         <Walletcards coinname = "DAI" amount="19" fullcoinname="DAI" increase="+7.4"/> */}
    //     </div>
    // )
        // }

export default Walletmain
