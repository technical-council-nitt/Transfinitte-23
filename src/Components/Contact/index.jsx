
import logo from "../../assets/logo.svg";
import "./contact.css";

const Contact = () => {

    return (
        <>
            <section id="footer" style={{background : "linear-gradient(180deg, rgb(11, 2, 33) 0%, rgb(11, 1, 33) 100%)", padding : "2rem", lineHeight : 1.5,}}>
                <div style={{ width : "fit-content", marginLeft : "auto", marginRight : "auto"}} className="mainc">
                    <div style={{width : "15rem", display : "inline-block"}}>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Contact</h3>
                        <p>Phone No : 123456789</p>
                        <p>Email : 123@gmail.com</p>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Problem Statements</h3>
                        <a style={{color : "white", cursor : "pointer"}}>2022 archive</a> <br/>
                        <a style={{color : "white", cursor : "pointer"}}>2021 archive</a> <br/>
                        <a style={{color : "white", cursor : "pointer"}}>2020 archive</a>
                    </div>
                    <div style={{width : "15rem", display : "inline-block"}}>
                    <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Address</h3>
                        <p>Orion, Lecture Hall</p>
                        <p>NIT Trichy</p>
                        <h3 style={{marginBottom : "0.5rem", marginTop : "0.5rem"}}>Social</h3>
                        <a style={{color : "white", cursor : "pointer"}}>Twitter</a> <br/>
                        <a style={{color : "white", cursor : "pointer"}}>Instagram</a> <br/>
                        <a style={{color : "white", cursor : "pointer"}}>LinkedIn</a> <br/>

                    </div>
                    <div style={{width : "10rem", display : "inline-block"}}>
                        <img src = {logo} />
                        TRANSFINITTE
                    </div>
                </div>

            </section>
        </>
    )
}


export default Contact;