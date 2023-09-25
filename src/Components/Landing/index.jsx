import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import LandingBg from "../../../public/assets/LandingBg.svg";
import "./landing.css";

import { useState, useEffect } from 'react';

const Landing = () => {
    const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("October 26, 2023").getTime();

  const getTime = () => {
    const currentTime = new Date().getTime();
    const time = deadline - currentTime;

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <>

    <BackgroundImage
        className = "landingbg"
        src={LandingBg}
      >
            <div className='container'>
            <div className="content">
      <div className="smallContainer">
        <h3>27-29th OCTOBER</h3>
        <h1>TRANSFINITTE</h1>
        <h2>Innovation Knows No Bounds</h2>
        <div className="buttonHolder">
          <button id="regbtn">REGISTER NOW</button>
          <button id="archbtn">2022 ARCHIVE</button>
        </div>
      </div>
      <div className="timer">
        <div className="element">
          <div className="time">{days}</div>
          <div className="timeText">DAYS</div>
        </div>
        <div className="element">
          <div className="time">{hours}</div>
          <div className="timeText">HOURS</div>
        </div>
        <div className="element">
          <div className="time">{minutes}</div>
          <div className="timeText">MINUTES</div>
        </div>
        <div className="element">
          <div className="time">{seconds}</div>
          <div className="timeText">SECONDS</div>
        </div>
      </div>
    </div>
            </div>
            </BackgroundImage>
        </>
    )
}


export default Landing;