import { Accordion,createStyles } from '@mantine/core';
import {motion} from "framer-motion";


const useStyles = createStyles((theme) => ({
    root: {
      backgroundColor: "#0B022122",
      borderRadius: theme.radius.sm,
      color : "white",
      marginBottom : "3rem",
    },
  
    item: {
      backgroundColor: "#0B022122",
      border: '1px solid transparent',
      position: 'relative',
      zIndex: 0,
      marginBottom : "0.5rem",
      color : "white",
      transition: 'transform 150ms ease',
      borderColor: "#f5bffb",
      '&[data-active]': {
        transform: 'scale(1.03)',
        backgroundColor: "#0B0221",
        boxShadow: theme.shadows.md,
        borderColor: "#f5bffb",
        borderRadius: theme.radius.md,
        zIndex: 1,
      },
    },
    label : {
        color : "white",
    },
    chevron: {
      color : "white",
      '&[data-rotate]': {
        transform: 'rotate(-90deg)',
      },
    },
  }));

const FaQs = () => {
    const { classes } = useStyles();

  return (
    <div className="aboutPage" id="faqs">
      <div className="inBox">
        <motion.div className="Box" initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1}}>
          <div className="text-wrapper">FAQs</div>
          <Accordion       sx={{ width : "100%", marginTop : "4rem" }}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring1">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring2">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring3">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring4">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>

    </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FaQs;
