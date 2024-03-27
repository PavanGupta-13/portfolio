import React from "react";
import resumePDF from "/Users/macbookair/Documents/portfolio/src/images/PavanGupta_SeniorWebDev_India.pdf";

const Resume = ()=>{
    return(
        <>
        <div>
            <a href={resumePDF} download="PavanGupta_SeniorWebDev_India.pdf" style={{textDecoration:'none'}}><p className="h3" style={{color:'whitesmoke'}}>Download Resume &#x2B07;</p></a>
        </div>
        </>
    )
}

export default Resume