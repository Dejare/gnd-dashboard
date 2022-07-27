import React from "react";
import { useHistory } from "react-router-dom";
import './App.scss'

const Error = () => {
  const history = useHistory()
  function home() {
    history.push("/")
  }
  return (
    <div className="error">
      <div className="flex items-center flex-col content-center justify-center h-4/4">
        <h1 className="text-8xl">404</h1>
        <p>We are Sorry</p>
        <p>The page you are looking for does not exist</p>
        <div className="px-8 align-center text-center bg-gray-300 py-4 rounded-xl mt-8" onClick={home}>Go Home</div>
      </div>
    </div>
  );
};

export default Error;
