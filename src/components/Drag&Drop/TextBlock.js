import React from "react";
import { useDrag } from "react-dnd";
import './textBlock.css';

export const ItemTypes = {
    TEXT_BLOCK: 'textBlock',
    NAME: 'NAME',
    DETAILS: 'DETAILS',
    DESCRIPTION: 'DESCRIPTION'
}

const TextBlock = ({ text, type }) => {
    const [{ isDragging }, drag] = useDrag({
    //   item: { type: ItemTypes.TEXT_BLOCK, text },
    type,
    // type: {type},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag}
        className={`text-block ${isDragging ? 'dragging' : ''}`}
      >
        {text}
      </div>
    );
  };
  
  export default TextBlock;