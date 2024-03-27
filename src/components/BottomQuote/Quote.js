import React from "react";

const Quote = (props) => {
  return (
    <figure class="text-end" style={{marginBottom:'0'}}>
      <blockquote class="blockquote" style={{color:'#254e70'}}>
        <p>{props.quoteText}</p>
      </blockquote>
      <figcaption class="blockquote-footer" style={{marginBottom:'0'}}>
        {props.sourceName} <cite title="Source Title">{props.sourceBook}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;
