import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import {ItemTypes} from './TextBlock';
import './dropTarget.css';
import DroppedBlock from './DroppedBlock';

// const ItemTypes = {
//     TEXT_BLOCK: 'textBlock',
// }

// Define drop target component
const DropTarget = (props) => {
  const [droppedText, setDroppedText] = useState('');
  const [showDroppedBlock, setShowDroppedBlock] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: [ItemTypes.NAME, ItemTypes.DETAILS, ItemTypes.DESCRIPTION],
    drop: (item) => {
        // if (props.clickedItem.toLowerCase() === ItemTypes.NAME.toLowerCase()) {
        //     setDroppedText(props.clickedItem.toLowerCase());
        //   } else if (props.clickedItem.toLowerCase() === ItemTypes.DETAILS.toLowerCase()) {
        //     setDroppedText(props.clickedItem.toLowerCase());
        //   } else if (props.clickedItem.toLowerCase() === ItemTypes.DESCRIPTION.toLowerCase()) {

        //   }
          setDroppedText(props.clickedItem.toLowerCase());
          setShowDroppedBlock(true);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    // type: ItemTypes.TEXT_BLOCK
  });

  useEffect(()=>{
    setDroppedText('')
  },[props.resetBtnClicked])
  // props.resetBtnClicked && setDroppedText('')

  return (
    <div ref={drop} className={`drop-target ${isOver ? 'over' : ''}`}>
      {/* <p>{droppedText}</p> */}
      {showDroppedBlock && <DroppedBlock droppedText={droppedText}/>}
    </div>
  );
};

export default DropTarget;
