import "./styles.css";
import logo from "../../assets/logo.svg";
import anand from "../../assets/anand.jpg";
import kumar from "../../assets/kumar.jpg";
import anirudh from "../../assets/anirudh.jpg";
import ayush from "../../assets/ayush.jpg";
import rakesh from "../../assets/rakesh.jpg";
import abishake from "../../assets/abishake.jpg";
import subash from "../../assets/subash.jpg";
import ram from "../../assets/Ram.jpg";

import {motion} from "framer-motion";


const Judges = () => {
  return (
    <div className="judgesPage" id="judges">
      <div className="Inbox">
        <div className="judges-speakers" style={{padding : "1rem"}}>Judges</div>
        <div className="box">
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}}  whileInView={{transform : "scale(1)"}} transition={{delay : 0.2}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Anand Kumar</div>
                <div className="place">SOC design Engineering manager at Intel</div>
              </div>
              <img src={anand} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.4}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Anirudh R</div>
                <div className="place">Software Engineer at Oracle </div>
              </div>
              <img src={anirudh} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.5}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Ayush Singh</div>
                <div className="place">Software Engineer at Microsoft, SIH'22 winner </div>
              </div>
              <img src={ayush} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Ram Sreevaths</div>
                <div className="place">Software Developer at Oracle</div>
              </div>
              <img src={ram} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.3}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Kumar Nandan</div>
                <div className="place">SOC Technical Design Lead at Intel</div>
              </div>
              <img src={kumar} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.6}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Rayapalli Rakesh</div>
                <div className="place">Software Engineer at Oracle </div>
              </div>
              <img src={rakesh} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Abishake A</div>
                <div className="place">SMT at D.E. Shaw, India</div>
              </div>
              <img src={abishake} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Subash</div>
                <div className="place">Analyst at Goldman Sachs</div>
              </div>
              <img src={subash} alt="logo" />
            </motion.div>
          </div>
          
        </div>
        <br/>
      </div>
    </div>
  );
};

export default Judges;
