import React from "react";
import linkedIn from "/Users/macbookair/Documents/portfolio/src/images/linkedin.svg";
import insta from "/Users/macbookair/Documents/portfolio/src/images/insta.webp";
import gmail from "/Users/macbookair/Documents/portfolio/src/images/gmail.svg";
import whatsapp from "/Users/macbookair/Documents/portfolio/src/images/whatsapp.svg";
import './socials.css';

const Socials = (props) => {
    const fromDDWidget = props.fromDDWidget
    const handleMailClick = () => {
      const recipient = 'pavanguptak13@gmail.com'; // Replace with the recipient email address
      const subject = 'Reaching you regarding the oppurtunity at '; // Optional: Replace with the subject of the email
      const body = ''; // Optional: Replace with the body of the email
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink);
    };

    const handleWhatsAppClick = () => {
      const phoneNumber = '+918179971609'; // Replace with the recipient's phone number
      const message = 'Hello Pavan!'; // Optional: Replace with the message you want to send
      
      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Open the WhatsApp chat window
      window.open(whatsappUrl);
    };

  return (
    <>
      <div style={{display:fromDDWidget && "flex"}}>
        {!fromDDWidget ? <h1 className="display-6" style={{marginRight:'10px'}}><mark>I AM SOCIAL!</mark></h1> : <p><mark>SOCIALS-</mark></p>}
        <div className={!fromDDWidget ? 'socials-icons' : 'social-icons-dd'}>
          <a className="link" target="_blank" href="https://www.linkedin.com/in/pavanguptak13">
            <img className={!fromDDWidget ? "smallIcon" : "smallIcon-dd"} src={linkedIn}></img>
          </a>
          <a className="link" target="_blank" href="https://www.instagram.com/_easy_pg?igsh=YzV6anYxMTl1dGt4">
            <img className={!fromDDWidget ? "smallIcon" : "smallIcon-dd"} src={insta}></img>
          </a>
          <a className="link">
            <img className={!fromDDWidget ? "smallIcon" : "smallIcon-dd"} src={gmail} onClick={handleMailClick}></img>
          </a>
          <a className="link">
            <img className={!fromDDWidget ? "smallIcon" : "smallIcon-dd"} src={whatsapp} onClick={handleWhatsAppClick}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
