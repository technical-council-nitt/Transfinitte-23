
import logo from "../../assets/logo.svg";
import "./contact.css";

import { IconPhoneCall,IconMail, IconBrandInstagram, IconBrandX, IconBrandLinkedin } from "@tabler/icons-react";

const Contact = () => {

    return (
        <>
            <section id="contact" style={{background : "linear-gradient(180deg, rgb(11, 2, 33) 0%, rgb(11, 1, 33) 100%)", padding : "2rem", lineHeight : 1.5,}}>
                <div  className="mainc">
                    <div className="footer-d1">
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Contact</h3>
                        
                        <div style={{display : "flex", position : "absolute"}}>
                        <p style={{display : "flex", alignItems : "center"}} className="mail"><IconMail style={{marginRight : "0.5rem"}} onClick={() => {window.open("mailto:technicalcouncil@pragyan.org")}}/><span>technicalcouncil@pragyan.org</span></p>
                        </div>

                        <div style={{display : "flex"}} className="hidemob">
                        <IconPhoneCall style={{marginRight : "0.5rem", width : "1.8rem"}}/>
                        <p style={{display : "flex", alignItems : "center"}}> 96706 64115  Akash</p>
                        </div>
                        <div style={{display : "flex"}}>
                        <IconPhoneCall style={{marginRight : "0.5rem", width : "1.8rem"}}/>
                        <p style={{display : "flex", alignItems : "center"}}> 93808 72847  Jairam</p>
                        </div>
                        <div style={{display : "flex"}}>
                        <IconPhoneCall style={{marginRight : "0.5rem", width : "1.8rem"}}/>
                        <p style={{display : "flex", alignItems : "center"}}> 77609 42275  Bandavya</p>
                        </div>
                        


                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Problem Statements</h3>
                        <a style={{cursor : "pointer"}} onClick={() => {window.open(
  'https://drive.google.com/file/d/1PcIjK3qWJYjgxCiBnXAnTdjH5rwDA2KU/view?usp=sharing',
  '_blank' // <- This is what makes it open in a new window.
);}}>2022 archive</a> <br/>
             

                    </div>
                    <div className="footer-d2">
                    <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Address</h3>
                        <p>Orion, Lecture Hall</p>
                        <p>NIT Trichy</p>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Social</h3>
                        <a style={{ cursor : "pointer", marginRight : "0.5rem"}} onClick={() => {window.open(
  'https://www.instagram.com/tc_nitt/?hl=en',
  '_blank' // <- This is what makes it open in a new window.
);}}><IconBrandInstagram size={"2rem"}/></a> 
                        <a style={{ cursor : "pointer", marginRight : "0.5rem"}} onClick={() => {window.open(
  'https://www.linkedin.com/company/technical-council-nit-trichy/mycompany/',
  '_blank' // <- This is what makes it open in a new window.
);}}><IconBrandLinkedin size={"2rem"}/></a> 

                    </div>
                    <div  className="transfinitte-footer">
                        <img src = {logo} />
                        TRANSFINITTE
                    </div>
                </div>
                <br/>
            </section>
        </>
    )
}


export default Contact;