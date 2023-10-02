
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.css";
import { Text,Title } from '@mantine/core';
import {IconBrowserCheck, IconConfetti, IconDeviceLaptop, IconChefHat,IconCoffee,IconMicrophone2, IconGrill, IconAnalyze, IconPresentation, IconAward} from "@tabler/icons-react";


const TimeLine = () => {

    return (
        <section className='bg'id='timeline' style={{textAlign : "center"}}> 
        <h1>TimeLine</h1>
        <p style={{textAlign : "center", color : "#f5bffb"}}>The provided timeline is tentative and subject to change as necessary.</p>
        <br/>
        <div className='daytimeline'>
        <Title fz={"2rem"} c={"#f5bffb"}>27th October</Title>
        </div>
    <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb", display : "flex", justifyContent : "space-around", alignItems : "center"}}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconBrowserCheck style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >5:00 PM - Check In</Text>
    

    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconConfetti style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >5:30 PM - Opening Ceremony and Inauguration</Text>
  </VerticalTimelineElement><VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconDeviceLaptop style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >6:30 PM - Hack Starts</Text>
  </VerticalTimelineElement><VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconChefHat style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >8:00PM - Dinner</Text>
  </VerticalTimelineElement>

</VerticalTimeline>

<div className='daytimeline'><Title fz={"2rem"} c={"#f5bffb"}>28th October</Title></div>

    <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb", display : "flex", justifyContent : "space-around", alignItems : "center"}}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconCoffee style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >8:00 AM - BreakFast</Text>
    

    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconMicrophone2 style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >11:00 AM - Speaker Session 1</Text>
  </VerticalTimelineElement><VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconGrill style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >12:30 PM - Lunch</Text>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconMicrophone2 style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >2:00 PM - Speaker Session 2</Text>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconAnalyze style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >5:30PM - Review</Text>
  </VerticalTimelineElement><VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconChefHat style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >8:00PM - Dinner</Text>
  </VerticalTimelineElement>

</VerticalTimeline>
<div className='daytimeline'><Title fz={"2rem"} c={"#f5bffb"}>29th October</Title></div>

    <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb", display : "flex", justifyContent : "space-around", alignItems : "center"}}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconCoffee style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >8:00 AM - BreakFast</Text>
    

    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconPresentation style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >1:00 PM - Judging Starts</Text>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow : "0 3px 0 #f5bffb" }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.05)' }}
    iconStyle={{ background: '#0E153A', color: '#fff', 'fontsize':'200px',boxShadow: "0 0 0 4px #f5bffb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"}}
  >
    <IconAward style={{color : "#f5bffb"}} size={"5rem"} strokeWidth={"1px"}/>
    <Text >7:00 PM - Closing Ceremony</Text>
  </VerticalTimelineElement>
</VerticalTimeline>

    
            
        </section>)
}


export default TimeLine;