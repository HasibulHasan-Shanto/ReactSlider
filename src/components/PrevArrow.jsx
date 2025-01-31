import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const PrevArrow = (props ,) => {
    const { onClick } = props;
  return (
    <div
    className={' absolute top-1/2 left-0 z-10 text-4xl'}
 
    
    onClick={onClick}
    
 >
  <FaArrowAltCircleLeft/>  
 </div>
  )
}

export default PrevArrow
