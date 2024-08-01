import React from 'react'
import HeaderPage from './Header/HeaderPage'
import Button from "@components/Button"
import Footer from'../Components/Footer'
import picture from "/public/image2.jpg"
import Image from 'next/image'





const page = () => {
  return (
    <>

     <div style={{ backgroundColor: 'black', minHeight: '10vh' }}></div>
     <Image
        src={picture}
        alt="code"
        width={100}
        height={100}
      className="rounded-full w-56 h-56 ml-auto px-2 mr-20  "
      /> 

    <HeaderPage/>
    <Button/>
    <Footer/>
   
 

    
    </>
  )
}

export default page