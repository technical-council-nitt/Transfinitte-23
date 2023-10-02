import "./styles.css";
import logo from "../../assets/logo.svg";
import kishore from "../../assets/kishore.jpg";
import praveen from "../../assets/praveen.jpg";
import tanvi from "../../assets/tanvi.jpg";
import sandhya from "../../assets/sandhya.jpg";
import vivek from "../../assets/vivek.jpg";
import ankur from "../../assets/ankur.jpg";
import ssk from "../../assets/SSK.jpg";
import profile from "../../assets/default.png";

import {motion} from "framer-motion";


const Judges = () => {
  return (
    <div className="judgesPage" id="judges">
      <div className="Inbox">
        <div className="judges-speakers" style={{padding : "1rem"}}>Previous edition Judges</div>
        <div className="box">
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}}  whileInView={{transform : "scale(1)"}} transition={{delay : 0.2}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">KISHORE V</div>
                <div className="place">Senior Associate, Morgan Stanley</div>
              </div>
              <img src={kishore} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.3}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">N Praveen</div>
                <div className="place">Software Engineer at Rubrik, Inc</div>
              </div>
              <img src={praveen} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.4}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Tanvi K.</div>
                <div className="place">Gleam India Ambassador, Microsoft </div>
              </div>
              <img src={tanvi} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.5}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Sandhya Saravanan</div>
                <div className="place">Research Fellow at Microsoft </div>
              </div>
              <img src={sandhya} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.6}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">Vivek Raveendran</div>
                <div className="place">Software Engineer at LG </div>
              </div>
              <img src={vivek} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Dr. Ankur Singh Rana</div>
                <div className="place">Assistant Professor at NITT</div>
              </div>
              <img src={ankur} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Dr. Selvakumar</div>
                <div className="place">Professor(HAG) at NITT</div>
              </div>
              <img src={ssk} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Dr. Sangeetha</div>
                <div className="place">Associate Professor at NITT</div>
              </div>
              <img src={profile} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} viewport={{once : true}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">HARDWARE</div>
                <div className="title">Dr. R. Periyasamy</div>
                <div className="place">Assistant Professor at NITT</div>
              </div>
              <img src={profile} alt="logo" />
            </motion.div>
          </div>
          
         
        
        </div>
        <p style={{textAlign : "center", color : "#f5bffb", padding : "1rem"}}>We will be updating the judges and speakers for this edition soon.</p>
        <br/>
      </div>
    </div>
  );
};

export default Judges;
