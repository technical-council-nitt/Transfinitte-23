

import logo from "../../assets/logo.svg";
import {motion} from "framer-motion";
import "./sponsors.css";

const Sponsors = () => {

    return (
        <>
        <section id="sponsors">
        <div className="aboutPage" id="aboutus">
      <div className="inBox">
        <div className="Box">
          <div className="text-wrapper">Sponsors</div>
          <div className="imageHolder">
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.1}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.2}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.3}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.4}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.5}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.6}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.7}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.8}}></motion.img>
            <motion.img src={logo} initial = {{transform : "rotateZ(90deg)"}} viewport={{once : true}} whileInView = {{transform : "rotateX(0)"}} transition={{duration : 0.5, delay : 0.9}}></motion.img>

            
          </div>
        </div>
      </div>
    </div>
        </section>
        </>
    )
}


export default Sponsors;