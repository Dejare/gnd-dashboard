import { useEffect, useRef, useState } from "react";
import "../../App.scss";
import { GoKebabVertical } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Centercard({
    cryptoAsset,
    bg,
    imgSrc,
    cryptoAssetValue,
    cryptoAssetValueUSD,
    alt,
}) {
    const dropdown = useRef();
    const balance = useRef();
    const balanceCrypto = useRef();
    const [showBal, setshowBal] = useState(false);

    const [Balance, setBalance] = useState(false);

    function showDropdown() {
        dropdown.current.style.display = "block";
    }
    function closeDropdown() {
        dropdown.current.style.display = "none";
    }
    function trust() {
        balance.current.innerHTML = "******";
        balanceCrypto.current.innerHTML = "*********";
        setBalance(true);
        setshowBal(true);
    }
    function show() {
        balance.current.innerHTML = `${cryptoAssetValueUSD}`;
        balanceCrypto.current.innerHTML = `${cryptoAssetValue}`;
        setBalance(false);
        setshowBal(false);
    }

    return (
        <div className="card" style={{ backgroundColor: `${bg}` }}>
            <div className="heading">
                <h5>{cryptoAsset}</h5>
                <div className="dot">
                    <GoKebabVertical onClick={showDropdown} />
                </div>
            </div>
            <div className="img">
                <img src={imgSrc} alt={alt} />
            </div>
            <div
                id="dropDown"
                style={{ backgroundColor: `${bg}`, display: `${null}` }}
                ref={dropdown}
            >
                <div id="cancelDropDown" onClick={closeDropdown}>
                    &times;
                </div>
                <div className="dropDownBg" onClick={closeDropdown}>
                    <a href="#">
                        <p>Send</p>
                    </a>
                    <a href="#">
                        {" "}
                        <p>Recieve</p>
                    </a>
                    {Balance ? (
                        <a href="#" onClick={show}>
                            <p>Show Balance</p>
                        </a>
                    ) : (
                        <a href="#" onClick={trust}>
                            <p>Hide Balance</p>
                        </a>
                    )}
                </div>
            </div>
            {/* VALUEES  */}
            <div className="cryptoValue">
                <div className="cryptoValues  flex justify-around items-center">
                    <div className="">
                        <h4 className="bold" ref={balanceCrypto}>
                            {cryptoAssetValue}
                        </h4>
                        <h5 ref={balance}>{cryptoAssetValueUSD}</h5>
                    </div>
                    <div className="flex justify-between">
                        {showBal ? (
                            <AiOutlineEye onClick={show} />
                        ) : (
                            <AiOutlineEyeInvisible onClick={trust} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Centercard;
