import React, { useState } from 'react'
import logo from '../../assets/logo/logoNft.svg'
import IconMenu from '../../assets/icon/iconMenu'
import IconClose from '../../assets/icon/iconClose'
import ButtonRegular from '../ButtonRegular/indx'

export default function Header() {
  let [open, setOpen] = useState(false)
  const links = [
    {
      "url": "/",
      "id" : 1,
      "name": "Marketplace"
    },
    {
      "url": "/",
      "id" : 2,
      "name": "Collection"
    },
    {
      "url": "/",
      "id" : 3,
      "name": "Community"
    },
    {
      "url": "/",
      "id" : 4,
      "name": "Create"
    }
    
  ]
  return (
    <div className='text-white container mx-auto md:flex md:justify-between md:items-center '>
      <div className=' flex justify-between p-6' >
        <img src={logo} alt="Logo nft" className=' w-36'/>
        <div onClick={() => {
          setOpen(!open)
        }} className="md:hidden">
          {open
          ? <IconClose /> 
          : <IconMenu />
          }
        </div>
        
      </div>
      
        <nav className={ ` z-30 bg-white flex flex-col absolute w-full h-full text-black pb-6 md:static md:w-auto md:flex md:flex-row md:pb-0 md:text-white  md:z-auto md:bg-transparent transition-all duration-500 ease-in ${open ? 'left-0 ':'left-[-1190px]'} ` }> 
          {links.map((link) => (
              <a 
              href={link.url} 
              key={link.id}
              target="_blank" 
              rel="noreferrer" 
              className='ml-6 mb-36 text-xl font-Poppins font-semibold first:pt-14 md:first:pt-0 md:mb-0 hover:text-regal-blue-hover duration-500'>{link.name}</a> 
          ))} 
        </nav>
        <ButtonRegular class="hidden mx-6"> Connect Wallet </ButtonRegular>
    </div>
  )
}
