import React from "react";
import Timeline from "../TimeLine/TimeLine";
import './moreinfo.css';
import NavBar from "../NavBar/NavBar";
import Quote from "../BottomQuote/Quote";

const MoreInfo = () => {
  return (
    <>
      <div className="more-info">
        <NavBar/>
        <Timeline />
      </div>
      <div className="quote-block">
        <Quote
          quoteText={
            "The only impossible journey is the one you never begin."
          }
          sourceName={"Tony Robbins,"}
          sourceBook={"American author and motivational speaker"}
        />
      </div>
    </>
  );
};

export default MoreInfo;
