import React, { useState } from "react";
import "./Timeline.css"; // Import your CSS file for styling

// Sample data for the timeline
const timelineData = [
  { year: 2015, event: "Graduated with Bachelores in Electronics and Communication Engineering from Andhra University with 7.8 CGPA" },
  { year: 2019, event: "Landed my first job at Infosys, as Systems Engineer. Worked for Telstra client, the experience helped me lay a strong foundation in my career as React Frontend Developer" },
  { year: 2021, event: "Promoted to Senior Systems Engineer role. With 2 years of experience, I was peforming above and beyond. The new oppurtunity helped me gain insights in-depth" },
  { year: 2022, event: "Joined Verizon as Engineer-II. The current role caters my learnings and gives oppurtunities to gain understanding in new horizons." },
  { year: 2023, event: "Recognized for my dynamic and timely efforts in ideating and kick-starting the Store Locator feature within Verizon's Address Qualification widget" },
  { year: 2024, event: "While continuing my current role and responsibilities, I am exploring oppurtunities to challenge and push my abilities, that will in-turn benefit both myself and organisational growth." },
];

// Timeline component
const Timeline = () => {
  const [eventBox, setEventBox] = useState(<></>);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoverEvent = (event, index) => {
    let eventBox = <p style={{left: index<=2 ? '3vw' : '-20vw'}} className="description">{event}</p>;
    setEventBox(eventBox);
  };

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 359
    const saturation = Math.floor(Math.random() * 101); // Random saturation value between 0 and 100
    const lightness = Math.floor(Math.random() * 51) + 50; // Random lightness value between 50 and 100 (to ensure readable colors)
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  const randomBackgroundColor = getRandomColor();
  return (<>
  <div className="header">
<h1 className="display-2 text-center" style={{fontWeight:'bold', color:'white', cursor:'pointer'}}>My Time-Line</h1>
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item"
          data-year={item.year}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="event-marker"
            onMouseOver={() => {
              hoverEvent(item.event, index);
            }}
            style={{backgroundColor:randomBackgroundColor, border: hoveredIndex === index ? '2px solid white' : 'none', transition: 'border 0.3s ease'}}
          >
            {item.year}{" "}
          </div>
          {hoveredIndex === index && (
            <div className="event-tooltip">{eventBox}</div>
          )}
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Timeline;
