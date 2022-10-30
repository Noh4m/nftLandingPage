import React from 'react'

export default function ButtonRegularV2(props) {
  return (
    <button className={` ${props.class}  lg:text-lg md:text-xs font-Poppins font-semibold border-white border-solid border-2 p-2  rounded-[60px] hover:bg-regal-blue-hover md:block `}>
        {props.children}
    </button>
  )
}
