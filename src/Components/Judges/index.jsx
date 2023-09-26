import "./styles.css";
import logo from "../../assets/logo.svg";
import {motion} from "framer-motion";


const Judges = () => {
  return (
    <div className="judgesPage">
      <div className="Inbox">
        <div className="judges-speakers">Judges &amp; Speakers</div>
        <div className="box">
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.2}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div>
          <div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.3}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.4}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.5}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.6}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div><div className="inlineBlock">
            <motion.div className="judge" initial = {{transform : "scale(0.5)"}} whileInView={{transform : "scale(1)"}} transition={{delay : 0.7}}>
              <div className="info">
                <div className="designation">SOFTWARE</div>
                <div className="title">TECHNICAL COUNCIL</div>
                <div className="place">NIT TRICHY TECH COUNCIL</div>
              </div>
              <img src={logo} alt="logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
