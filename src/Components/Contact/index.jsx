
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
                        <p style={{display : "flex", alignItems : "center"}}><IconPhoneCall style={{marginRight : "0.5rem"}}/>  123456789</p>
                        <p style={{display : "flex", alignItems : "center"}}><IconMail style={{marginRight : "0.5rem"}}/> 123@gmail.com</p>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Problem Statements</h3>
                        <a style={{cursor : "pointer"}}>2022 archive</a> <br/>
             

                    </div>
                    <div className="footer-d2">
                    <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Address</h3>
                        <p>Orion, Lecture Hall</p>
                        <p>NIT Trichy</p>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Social</h3>
                        <a style={{ cursor : "pointer", marginRight : "0.5rem"}}><IconBrandX size={"2rem"}/></a> 
                        <a style={{ cursor : "pointer", marginRight : "0.5rem"}}><IconBrandInstagram size={"2rem"}/></a> 
                        <a style={{ cursor : "pointer", marginRight : "0.5rem"}}><IconBrandLinkedin size={"2rem"}/></a> 

                    </div>
                    <div  className="transfinitte-footer">
                        <img src = {logo} />
                        TRANSFINITTE
                    </div>
                </div>
                <br/>
                <p style={{textAlign : "center"}}>Crafted with ❤️ by Technical Council.</p>
            </section>
        </>
    )
}


export default Contact;