import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import LandingBg from "../../../public/assets/LandingBg.svg";
import img2 from "../../assets/charged.png";
import img3 from "../../assets/abhibus.png";
import img4 from "../../assets/tezos.png";
import img6 from "../../assets/crewsphere.png";
import img1 from "../../assets/pathway2.png";
import img5 from "../../assets/gfg.png";
import img7 from "../../assets/netcon.png";
import img8 from "../../assets/boeing.png";

import "./landing.css";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const Landing = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("October 27, 2023 17:00:00").getTime();

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
      <BackgroundImage className="landingbg" src={LandingBg}>
        <div className="container">
          <div className="content">
            <div className="smallContainer">
              <motion.h3
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                27-29th OCTOBER
              </motion.h3>
              <div className="centerContent">
                <img src={img7} id="img7"></img>
                <h4>Presents</h4>
                <h1>TRANSFINITTE</h1>
                <h4>Powered by</h4>
                <img src={img8} id="img8"></img>
              </div>
              <h2>Innovation Knows No Bounds</h2>

              <div className="buttonHolder">
                <button
                  id="regbtn"
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                >
                  REGISTER NOW
                </button>
                <button
                  id="archbtn"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1PcIjK3qWJYjgxCiBnXAnTdjH5rwDA2KU/view?usp=sharing",
                      "_blank" // <- This is what makes it open in a new window.
                    );
                  }}
                >
                  2022 ARCHIVE
                </button>
              </div>
            </div>
            <motion.div
              className="timer"
              initial={{ opacity: 0, transform: "scale(0.1)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 1, delay: 1 }}
            >
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
            </motion.div>
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Landing;
