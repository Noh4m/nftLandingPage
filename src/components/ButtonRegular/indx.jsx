import React from 'react'

export default function ButtonRegular(props) {
  return (
    <button className={` ${props.class}  lg:text-lg md:text-xs font-Poppins font-semibold bg-regal-blue p-2  rounded-[60px] hover:bg-regal-blue-hover md:block `}>
        {props.children}
    </button>
  )
}
