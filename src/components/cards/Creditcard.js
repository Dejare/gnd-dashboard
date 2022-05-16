import React, {useState, useRef} from "react";
import {
    BsArrowLeftCircle,
    BsArrowBarLeft,
    BsArrowLeftSquareFill,
} from "react-icons/bs";
import './cards.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Creditcard = ({CardNum, CardDate}) => {
  const [Visible, setVisible] = useState(false)
  const cardNum = useRef()
  const cardDate = useRef()
    return (
        <div className="mainard md:w-2/4 w-3/4 h-80 bg-blue-400 rounded-3xl shadow m-12 relative">
            <div className="creditcardtopright md:text-xl m-8 text-white flex flex-row justify-between ">
                <div>
                    <h2>
                        GND <br /> Crypto
                    </h2>
                </div>
                <div>
                    <h2 className="text-gray-300 align-center">
                        DEBIT <br /> NAIRA
                    </h2>
                </div>
            </div>
            <div className="text-white md:m-8 m-2 ml-8">
                <BsArrowLeftSquareFill />
            </div>
            <div className="cardNum text-xl md:text-3xl text-white md:m-2 sm:m-8">
                <h2 ref={cardNum}>{CardNum}</h2>
                <p className="text-sm">
                    Valid Thru <span className="ml-4 text-xl" ref={cardDate}>{CardDate}</span>
                </p>
            </div>
            <div className="creditcardbottomright flex flex-row m-4">
                <div></div>
                <div className="secondCircle"></div>
            </div>
            <div className="creditcardbottomleft  m-4">
                <div>
                {
                  Visible ? <AiOutlineEye onClick={()=>{
                    setVisible(!Visible);
                    cardNum.current.innerHTML =`${CardNum}`;
                    cardDate.current.innerHTML = `${CardDate}`
                    
                  }}/> : <AiOutlineEyeInvisible onClick={()=>{
                    setVisible(!Visible);
                    cardNum.current.innerHTML ="********************";
                    cardDate.current.innerHTML = "**/**"
                  }}/>
                }
                </div>
            </div>
        </div>
    );
};

export default Creditcard;
