// import React from 'react'
import Paymentcard from "../cardsComponent/Paymentcard";
const List = function (props) {
    const mainData = props.data;
    const transactions = [mainData]

    console.log(transactions[0][0])


    transactions[0].map((coin) => {
        return (

            <Paymentcard amount={coin.amount} recieve={coin.coin} key={coin.id} />

        )
    })
}


export default List;