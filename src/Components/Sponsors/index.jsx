

import logo from "../../assets/logo.svg";
import bharathx from "../../assets/bharathx.jpg";
import tezos from "../../assets/tezos.webp";
import bluelearn from "../../assets/bluelearn.avif";
import gmetrix from "../../assets/gmetrix.png";


import {motion} from "framer-motion";
import "./sponsors.css";

const Sponsors = () => {

    return (
        <>
        <section id="sponsors">
        <div className="aboutPage" id="aboutus">
      <div className="inBox">
        <div className="Box">
          <div className="text-wrapper">Previous edition Sponsors</div>
          <div className="imageHolder">
            <div style={{width : "fit-content", display : "inline-block"}}>
            <motion.img src={bharathx} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5}}></motion.img>
            <h3 style={{ textAlign : "center", marginBottom : "2rem", marginLeft : "auto", marginRight : "auto"}}>Title Sponsor</h3>
            </div>
            <div style={{width : "fit-content", display : "inline-block"}}>
            <motion.img src={tezos} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5}}></motion.img>
            <h3 style={{ textAlign : "center", marginBottom : "2rem", marginLeft : "auto", marginRight : "auto"}}>BlockChain Partner</h3>
            </div>
            <div style={{width : "fit-content", display : "inline-block"}}>
            <motion.img src={bluelearn} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5}}></motion.img>
            <h3 style={{ textAlign : "center", marginBottom : "2rem", marginLeft : "auto", marginRight : "auto"}}>Community Partner</h3>
            </div>
            <div style={{width : "fit-content", display : "inline-block"}}>
            <motion.img src={gmetrix} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5}}></motion.img>
            <h3 style={{ textAlign : "center", marginBottom : "2rem", marginLeft : "auto", marginRight : "auto"}}>VR Partner</h3>
            </div>
            
            
          </div>
          <p style={{textAlign : "center", color : "#f5bffb"}}>We will be updating the sponsors for this edition soon.</p>

        </div>
      </div>
    </div>
        </section>
        </>
    )
}


export default Sponsors;