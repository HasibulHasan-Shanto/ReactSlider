import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={'absolute top-1/2 right-0 text-4xl'}
    onClick={onClick}
    
 >
    <FaArrowAltCircleRight className='text-black'/>
 </div>
  )
}

export default NextArrow