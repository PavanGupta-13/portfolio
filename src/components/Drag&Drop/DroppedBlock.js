import React from "react";
import profileIcon from "/Users/macbookair/Documents/portfolio/src/images/profilIcon.jpeg";
import workExIcon from "/Users/macbookair/Documents/portfolio/src/images/WorkExIcon.png";
import Socials from "../Contact/SocialLinks/Socials";

const DroppedBlock = (props) => {
  let contentBlocks = ''
  switch (props.droppedText) {
    case 'name':
      contentBlocks = (<><h1 className="name">
      <img className="profileIcon" src={profileIcon}></img>PAVAN GUPTA
    </h1></>)    
      break;
  
    case 'description':
      contentBlocks = (<><p className="description">
      <img className="profileIcon" src={workExIcon}></img>
      <br></br>
      <p style={{textAlign:'justify'}}>Dedicated React Developer with 4+ years of hands-on experience
      creating dynamic web applications. Proficient in JavaScript, HTML,
      and CSS, I excel in translating design concepts into pixel-perfect
      UI components. Committed to delivering high-quality code and
      driving innovation in every project.</p>
    </p></>)    
      break;

    case 'details':
        contentBlocks = (<><p className="description">
        pavanguptak13@gmail.com |
        +91-8179971609 |
        Hyderabad,
        India <br />
        <br />
        <div><Socials fromDDWidget={true}/> </div>
      </p></>)    
        break;

    default:
      break;
  }
    return (
      <div className="dropped-block">
        {contentBlocks==='' ? <p>Drag and Drop tile here to know</p> : <>{contentBlocks}</>}
      </div>
    );
  };

export default DroppedBlock