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
        <Accordion.Control>What is TransfiNITTe?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>TransfiNITTe is a 42-hour weekend event where students collaborate on innovative software and hardware projects.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Control>How does the application process work?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>To apply, you need to find your team and fill out the registration form. Following your submission, you will receive information on payment and will be added to a group where further details will be shared.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Control>What should I bring with me to TransfiNITTe?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>The main items to bring are your computer, charger, and if necessary, an adapter. </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="4">
        <Accordion.Control>What are the different domains of this hackathon?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>TransfiNITTe covers various domains, including web development, app development, cybersecurity, blockchain, machine learning, and more, encompassing both software and hardware projects.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="5">
        <Accordion.Control>What skills are required to take part in this hackathon? I don't have any experience; what can I do?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>While having domain-specific skills like web development or blockchain can be helpful, you can still participate and learn even if you don't have prior experience.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="6">
        <Accordion.Control>I don't have much experience in technical stuff. Can I still take part in it? </Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, TransfiNITTe welcomes participants with basic knowledge, and you can use this hackathon as a learning experience.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="7">
        <Accordion.Control>Will we need to work round the clock?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, TransfiNITTe is a 42-hour long hackathon, and participants are expected to work continuously. However, there will be breaks for lunch, snacks, and dinner. </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="8">
        <Accordion.Control>Will there be any participation fees?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, there will be participation fees, and you will receive details about the fees during the application process.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="9">
        <Accordion.Control>Do we need to have the entire idea fully working?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>No, you don't need to have the entire idea fully working, but points will be awarded based on the functionality level of your project. It is advised to complete the task to the best of your ability.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="10">
        <Accordion.Control>Does only the team leader have to register, or do each team member need to apply separately?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Only the team leader needs to register for the team. Team members do not need to apply separately.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="11">
        <Accordion.Control>Can I take part in the hackathon in online mode?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>No, TransfiNITTe is conducted in offline mode, meaning physical presence is required.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="12">
        <Accordion.Control>How many teams or people take part in TransfiNITTe?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>TransfiNITTe typically hosts around 50 teams, with each team consisting of 4-6 members.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="13">
        <Accordion.Control>What will be the judging criteria?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>The specific judging criteria have not been decided yet, but they will be communicated to participants during the hackathon.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="14">
        <Accordion.Control>Will there be any support available during the hackathon?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>Yes, there will be some support available, but it's advisable not to rely entirely on it. Participants are encouraged to be self-reliant and resourceful.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="15">
        <Accordion.Control>Will there be wireless internet access?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>TransfiNITTe will be held in Orion, so participants are expected to use their own internet connections.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="16">
        <Accordion.Control>Are we allowed to use third-party components like open-source libraries, etc., to implement a solution? Are there any limitations on components?</Accordion.Control>
        <Accordion.Panel c={"#f5bffb"}>In general, there are no limitations on using third-party components like open-source libraries. However, some problem statements may have their own restrictions, so participants should check the specific guidelines provided for each task.</Accordion.Panel>
      </Accordion.Item>
      

      

    </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FaQs;
