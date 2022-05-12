import React from 'react'
import './cards.scss'
const Transactions = ({text}) => {
  return (
    <div className=' transactions w-3/4 m-12 flex flex-row justify-between bg-gray-300 p-8 rounded-xl'>
       <div className="transactiontop flex flex-col">
         <h2 className='text-2xl'>Deposits</h2>
         <p>Card Deposits</p>
       </div>
       <div className="transactionbottom mr-12">
         <h2 className="heading-3 text-2xl">+300</h2>
         <p>2/4/22</p>
       </div>
    </div>
  )
}

export default Transactions