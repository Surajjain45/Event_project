import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md";

const Scanner = () => {
  return (
  <div className=' border border-white rounded-full p-3 w-fit bg-blue-800 hover:border-blue-800 shadow'>
      <MdOutlineQrCodeScanner className='text-white md:text-5xl text-2xl'/>
    </div>
  )
}

export default Scanner
