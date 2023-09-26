import "./styles.css";
import { Carousel } from '@mantine/carousel';
import { Image, createStyles } from "@mantine/core";
import hack from "../../assets/hack.png";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';
import {motion} from "framer-motion";

const images = [hack,hack,hack];

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
          <motion.div className="text-wrapper" initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1}} >About Us</motion.div>
          <motion.p initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1}} className="div">
            The department lays prime focus on academics interspersed with
            co-curricular and extra-curricular activities that bring the
            versatility of its students to the fore and gives them a sound sense
            of perspective. The faculty comprises of experienced and dedicated
            teachers who with their expert inputs encourage students to explore
            new avenues. The computer society “Websters” was started with the
            aim to foster interest in the world of computers and technology. It
            provides a platform for like-minded brains to communicate with each
            other and expand their horizons.
          </motion.p>
          <Carousel sx={{ maxWidth : "30rem", marginTop : "2rem", marginBottom : "2rem"}} mx="auto"  loop auto plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}>
            {slides}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
