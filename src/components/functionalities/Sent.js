import React,{useEffect, useRef} from "react";
import "./function.scss";
import congrat from '../../images/party-popper.svg'
import gsap from "gsap";
// import {useResolvedusPath} from "react-router"
import { useHistory } from "react-router-dom";

const Sent = ({amount, coin, walleto}) => {
   const history = useHistory()

   function home() {
    //    history.push("/s")
    container.current.style.display = "none"
   }
    // animation
const container = useRef()
    useEffect(() => {
        gsap.fromTo(container.current, {
          scale: 0,
          opacity:0
          }, {
            scale: 1,
            opacity: 1,
            duration: .3
          })
      }, [])

    return (
        <div className="sent">
            <div className="newtransfer" ref={container}>
                <div className="heading">
                    <h1 className="bold">Sinzu!!</h1>
                </div>
                <div className="image">
                    <img  src={congrat} alt="Money Sent Image" />
                </div>
                <div className="text">
                    <p>You have successfully sent {amount}{coin} to {walleto}</p>
                </div>
                <div className="sentBtn">
                <button className="bg-blue-5s00 sentBtn" onClick={home}>Return</button>
                
                </div>
            </div>
        </div>
    );
};

export default Sent;
