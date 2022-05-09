import React from "react";
import "../../components/Payment.scss";
const Paymentcard = ({ recieve, imgSrc, amount, date, imgg }) => {
    const today = new Date();
    console.log(today);
  const year =  today.getFullYear();
  const month =   today.getMonth() + 1;
  const day=  today.getDate();
    return (
        // <div className="paymentmaincard">
        //     <div className="onee">
        //         <div className="leftitems">
        //             <img src={imgSrc} />
        //             <p>Sent {recieve}</p>
        //         </div>
        //         <div className="rightitem">
        //             <p>{amount}</p>
        //         </div>
        //     </div>
        //     <div className="twoo">
        //         <div className="leftitems">
        //             <p className="date">{day}/{month}/{year}</p>
        //         </div>
        //         <div className="rightitem">{/* <img src={imgg}/>     */}</div>
        //     </div>
        // </div>

        <div className="paymentCard flex flex-column justify-around w-3/4 m-auto p-3 bg-white m-auto my-4 p-8 rounded-lg shadow">
        <div className="sideImg m-auto mx-0">
            <img src={imgSrc} alt="" width="30px" />
        </div>
        <div className="paymentCardTop justify-between m-auto mx-0">
            <div className="paymentCardTopLeft">
                <p className="abbrev mb-4">Sent {recieve}</p>
            </div>
            <div className="paymentCardTopRight">
                <p>{day}/{month}/{year}</p>
            </div>
        </div>
        <div className="paymentCardBottom text-center m-auto mx-0">
            <div className="paymentCardBottomLeft">
                <p className="date">{amount}</p>
            </div>
            <div className="paymentCardBottomRight">
                <p className="increase">APPROVED!</p>
            </div>
        </div>
    </div>


    );
};

export default Paymentcard;
