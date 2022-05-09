import React from 'react'
import './savings.scss'
import {AiOutlineArrowLeft,Aifi, AiFillDollarCircle} from 'react-icons/ai'
const SavingCards = ({img, text}) => {
  return (
    <div className='flex flex-col m-8 items-center hover:bg-gray-400 rounded-xl p-4'>
        {/* <img src={AiOutlineArrowLeft} /> */}
        <div className='text-xl'>
        {img}
        </div>
        <p className='mt-4'>{text}</p>
    </div>
  )
}

export default SavingCards