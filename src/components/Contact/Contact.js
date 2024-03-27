import React from "react";
import './contact.css';
import Socials from "./SocialLinks/Socials";
import NavBar from "../NavBar/NavBar";
import Resume from "./Resume/Resume";
import Quote from "../BottomQuote/Quote"

const Contact = ()=>{
    return (
    <>
    <div className="contact">
        <NavBar/>
        <div className="header-comp">
            <h1 className="display-1 fw-bolder" style={{color:'white', marginRight:'5vw'}}>Get in touch.</h1>
        <Socials/>
        </div>
        <div className="resumeLink"><Resume/></div>
    </div>
    <div className="quote-block">
        <Quote
          quoteText={
            "The only way to achieve the impossible is to believe it is possible."
          }
          sourceName={"Charles Kingsleigh,"}
          sourceBook={"Alice in Wonderland"}
        />
      </div>
    </>
    )
}

export default Contact