import React, {useEffect, useRef, useState} from "react";

const Search = () => {
const [searchValue, setsearchValue] = useState("")
const [Response, setResponse] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://nomics.com/api/v2/${searchValue}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setResponse(data)
        })
    }
    // console.log(document.querySelector("input").target.value)
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="search" id="search" placeholder="Search a coin" onChange={(e)=> 
                setsearchValue(e.target.value)
            }></input>
            </form>
        </>
    );
};

export default Search;
