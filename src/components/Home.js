import React from "react";
import "../styles/home.scss";
import search from '../assets/images/icon/search.svg'
import facebook from '../assets/images/icon/facebook.svg'
import twitter from '../assets/images/icon/twitter.svg'
import instagram from '../assets/images/icon/instagram.svg'
import youtube from '../assets/images/icon/youtube.svg'
import bgstyle from '../assets/images/group.png'
import ham from '../assets/images/icon/menu.svg'
import Text from "./Text";
const Home = () => {
  return (
    <>
      <header>
        <div className="logo">BuR</div>
        <div className="nav">
          <div className="mobile">
            <img src={ham}/>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* sidebar */}
      <div className="aside">
        <div className="iconWrapper">
          <img src={search}/>
          <img src={facebook}/>
          <img src={twitter}/>
          <img src={instagram}/>
          <img src={youtube}/>
        </div>
      </div>

      <div className="stylee">
          <img src={bgstyle}/>
      </div>


      <div className="discover">
          <h3>Discover  ───</h3>
          <p>now</p>
      </div>


<Text/>

      {/* PAGE BTNS */}
      <div className="pagebtn">
          <button className="btn">1</button>
          <button>2</button>
          <button>3</button>
      </div>
    </>
  );
};

export default Home;
