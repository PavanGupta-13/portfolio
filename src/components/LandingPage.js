import React, { useState, useRef } from "react";
import "./landingPage.css"; // Import CSS for styling
import profilePic from "/Users/macbookair/Documents/portfolio/src/images/profilePic.JPG";
import profileIcon from "/Users/macbookair/Documents/portfolio/src/images/profilIcon.jpeg";
import workExIcon from "/Users/macbookair/Documents/portfolio/src/images/WorkExIcon.png";
import linkedIn from "/Users/macbookair/Documents/portfolio/src/images/linkedin.jpeg";
import TextBlock from "./Drag&Drop/TextBlock";
import DropTarget from "./Drag&Drop/DropTarget";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavBar from "./NavBar/NavBar";
import Quote from "./BottomQuote/Quote";

const LandingPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [resetBtnClicked, setResetBtnClicked] = useState(true);
  const [clickedItem, setClickedItem] = useState("");
  const [showDDExp, setShowDDExp] = useState(false);

  const handleImageClick = () => {
    setExpanded(!expanded);
  };

  const handleClickedTitle = (title) => {
    setClickedItem(title.target.innerText);
    setResetBtnClicked(false);
  };

  const detailsArr = ["Name", "Description", "Details"];

  // const toggle = document.getElementById("toggle");

  // toggle.addEventListener("DOMContentLoaded", function (showDDExp) {
  //   setShowDDExp(!showDDExp)
  // });

  const toggleRef = useRef(null);

  const handleChange = () => {
    if (toggleRef.current) {
      setShowDDExp((showDDExp) => !showDDExp);
    }
  };

  return (
    <>
      <div className={`landing-page ${expanded ? "expanded" : ""}`}>
        {/* <AnimatedBackground/> */}
        {expanded && <NavBar />}
        {expanded && (
          <div className="toggle-container">
            <input
              type="checkbox"
              ref={toggleRef}
              id="toggle"
              class="toggle-input"
              onChange={handleChange}
            ></input>
            <label for="toggle" class="toggle-btn"></label>
          </div>
        )}

        <div className="content">
          <div className="left-content" onClick={handleImageClick}>
            {!expanded && (
              <h1
                className="name"
                style={{
                  color: "#000000",
                  backgroundColor: "rgb(255,255,255,0.5)",
                }}
              >
                Click to Learn About Me!
              </h1>
            )}
            <img
              src={profilePic}
              alt="Your Name"
              className={`profile-photo ${expanded ? "small" : "large"}`}
            />
          </div>
          {expanded && !showDDExp && (
            <div className="right-content">
              <h1 className="name">
                <img className="profileIcon" src={profileIcon}></img>PAVAN GUPTA
              </h1>
              <p className="description">
                <img className="profileIcon" src={workExIcon}></img>
                <br></br>
                Dedicated React Developer with 4+ years of hands-on experience
                creating dynamic web applications. Proficient in JavaScript,
                HTML, and CSS, I excel in translating design concepts into
                pixel-perfect UI components. Committed to delivering
                high-quality code and driving innovation in every project.
              </p>
              {false && (
                <p className="description">
                  pavanguptak13@gmail.com |
                  
                  +91-8179971609 |
                  
                  Hyderabad, India <br />
                  <br />
                  You can find me on{" "}
                  <a className="link" href="www.linkedin.com/in/pavanguptak13">
                    <img className="smallIcon" src={linkedIn}></img>
                  </a>
                </p>
              )}
            </div>
          )}

          {expanded && showDDExp && (
            <DndProvider backend={HTML5Backend}>
              <div>
                <h2 className="display-6" style={{color:'white'}}>Drag & Drop to Know About Me</h2>
                <div className="breadcrumbs-container">
                  {detailsArr.map((element) => (
                    <div
                      className={`breadcrumb ${
                        !resetBtnClicked && clickedItem === element
                          ? "active"
                          : ""
                      }`}
                      onMouseDown={handleClickedTitle}
                    >
                      <TextBlock text={element} type={element.toUpperCase()} />
                    </div>
                  ))}
                </div>

                <DropTarget
                  resetBtnClicked={resetBtnClicked}
                  clickedItem={clickedItem}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginLeft: "170px", marginTop: "20px" }}
                  disabled={resetBtnClicked}
                  onClick={() => setResetBtnClicked(true)}
                >
                  Reset
                </button>
              </div>
            </DndProvider>
          )}
        </div>
      </div>
      <div className="quote-block">
        <Quote
          quoteText={
            "Integrity is doing the right thing, even when no one is watching."
          }
          sourceName={"C.S. Lewis,"}
          sourceBook={"Mere Christianity"}
        />
      </div>
    </>
  );
};

export default LandingPage;
