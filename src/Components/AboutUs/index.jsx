import "./styles.css";
import { Carousel } from '@mantine/carousel';
import { Image, createStyles } from "@mantine/core";
import Carousel1 from "../../assets/Carousel1.jpg";
import Carousel2 from "../../assets/Carousel2.jpg";
import Carousel3 from "../../assets/Carousel3.jpg";
import Carousel4 from "../../assets/Carousel4.jpg";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';
import {motion} from "framer-motion";

const images = [Carousel1,Carousel2,Carousel3,Carousel4];

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

const AboutUs = () => {
  const { classes } = useStyles();

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    <div className="aboutPage" id="aboutus">
      <div className="inBox">
        <div className="Box">
          <motion.div className="text-wrapper" viewport={{once : true}} initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1}} >About Us</motion.div>
          <motion.p initial = {{opacity : 0}} viewport={{once : true}} whileInView={{opacity : 1}} transition={{duration : 1}} className="div">
          Welcome to TransfiNITTe, the pinnacle of innovation and technology hosted by the Technical Council of the National Institute of Technology, Tiruchirappalli, in collaboration with SCIENT, the Student Centre for Innovation in Engineering and Technology-NITT. Our journey began with a vision to foster creativity, push boundaries, and redefine possibilities. As we gear up for our fifth edition, TransfiNITTe'23 promises to be an electrifying experience like never before. <br/> <br/> TransfiNITTe'22 was a testament to the unyielding spirit of innovation. With over 50 teams and 300+ brilliant minds from NIT Trichy, it was a 42-hour marathon of coding, ideation, and relentless problem-solving. Together, we tackled challenges spanning a diverse array of software and hardware domains. <br/> <br/> TransfiNITTe'23 aspires to raise the bar even higher. With a goal of hosting 100+ teams and 500+ participants, we are set to create history once again. For us, this event is not just about innovation; it's about forging meaningful partnerships, driving change, and celebrating the magic that happens when brilliant minds unite.
          </motion.p>
          <motion.div initial = {{ opacity : 0}} viewport={{once : true}} whileInView={{ opacity : 1}} transition={{duration : 1}}>
          <Carousel sx={{ maxWidth : "30rem", marginTop : "2rem", marginBottom : "2rem"}} mx="auto"  loop auto plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}>
            {slides}
          </Carousel>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
