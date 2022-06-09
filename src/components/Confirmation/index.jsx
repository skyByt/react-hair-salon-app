import React from 'react'
import './confirmation.css'
import { AiOutlineClose } from "react-icons/ai";

const Confirmation = ({setShow}) => {
  return (
    <div className='container-fluid confirmation'>
      <p>Your appointment has been successfully booked.</p>
      <AiOutlineClose onClick={() => {setShow(false)}} className='icon'/>
    </div>
  )
}

export default Confirmation
