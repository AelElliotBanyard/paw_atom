import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[#5c5c5cae] rounded backdrop-blur-md p-5 flex flex-row gap-16 justify-center items-center '>
        <a href="#manhatten" className=' text-2xl text-white '>Manhatten-Projekt</a>
        <a href="#kernwaffen" className=' text-2xl text-white '>Kernwaffen</a>
        <a href="#besitz" className=' text-2xl text-white '>Besitz</a>
        <a href="#poliauswirkung" className=' text-2xl text-white '>Politische Auswirkung</a>
        <a href="#einschlagundfolgen" className=' text-2xl text-white '>Einschlag und Folgen</a>
        <a href="#differenzen" className=' text-2xl text-white '>Differenzen</a>
    </div>
  )
}

export default Navbar