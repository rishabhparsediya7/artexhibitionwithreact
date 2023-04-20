import React from "react";
import Navbar from "./Navbar";
import "../CSS/Home.css";
import MarqueeComponent from "./MarqueeComponent";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <div className="body">
        <Navbar />
        <div className="container-fluid">
          <div className="heading">
            <h1 className="tagline">HeartLine Association</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, ea!
            </p>
            <div className="hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              consequatur
            </div>
          </div>
        </div>
      </div>
      <div className="marquee__container">
        <Marquee speed={20} gradient={true} >
          <MarqueeComponent />
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
