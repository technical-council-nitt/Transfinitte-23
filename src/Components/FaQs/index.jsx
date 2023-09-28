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
        <motion.div viewport={{once : true}} className="Box" initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1, delay : 0.5}}>
          <div className="text-wrapper">FAQs</div>
          <Accordion       sx={{ width : "100%", marginTop : "4rem" }}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}>
      <Accordion.Item value="1">
        <Accordion.Control>what is transfinitte?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>It is a 42 hrs Weekend-long event where students come together to work on cool new software and/or hardware projects.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Control>How does the application process work?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Find your team and fill out the gform. By the end of it you will have a gateway to pay and keep a record of that payment. Soon enough you will be added to a group where further details will be shared.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Control>What all things should I bring with me?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>The main thing to take is your computer and a charger and if necessary an adapter. </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="4">
        <Accordion.Control>What are the different domains of this hackathon?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>There are various types of domains from software and hardware like web development, app development, cybersecurity, blockchain, machine learning etc.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="5">
        <Accordion.Control>what skills are required to take part in this hackathon? I don’t have any  experience what can I do?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>If you have a domain specific skill like webdev, blockchain etc, it will be helpful but even if you don’t have any skills you can still take part and learn a lot of things from this hackathon.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="6">
        <Accordion.Control>I don’t have much experience in technical stuff. Can I still take part in it? </Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes anyone with base level knowledge can also take part in it.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="7">
        <Accordion.Control>Will we need to work round the clock?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, it is a 42 hr long hackathon. Lunch, snacks and dinner breaks will be provided. </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="8">
        <Accordion.Control>Will there be any participation fees?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, there will be participation fees. Details will be given during your application process.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="9">
        <Accordion.Control>Do we need to have the entire idea fully working?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>No, points will be given based on the functionality level of the task. It is advised to complete the task.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="10">
        <Accordion.Control>Does only the leader has to register for the team or each member has to apply separately?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, only the leader has to register for the team.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="11">
        <Accordion.Control>Can I take part in hackathon in online mode?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>No, the hackathon is conducted in offline mode.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="12">
        <Accordion.Control>How many teams or people take part in TransfiNITTe?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Around 50 teams takes part in transfinitte. Each team consist of 5 members.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="13">
        <Accordion.Control>What will be the judging criteria?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Will be informed when hack starts</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="14">
        <Accordion.Control>Will there be any support available during the hackathon?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, but don’t fully depend on them</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="15">
        <Accordion.Control>Will there be wireless internet access?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Since it will be in orion, so you have to use your own net.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="16">
        <Accordion.Control>Are we allowed to use third party components like open source libraries etc. to implement a solution? Are there any limitations on component?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>No there's no limitation in general. But some problem statements might have their own restrictions</Accordion.Panel>
      </Accordion.Item>
      

      

    </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FaQs;
