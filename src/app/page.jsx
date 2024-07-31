import React from 'react'
import HeaderPage from './Header/HeaderPage'
import Button from "@components/Button"
import Footer from'../Components/Footer'


const page = () => {
  return (
    <>

     <div style={{ backgroundColor: 'black', minHeight: '30vh' }}></div>

    <HeaderPage/>
    <Button/>
    <Footer/>
 

    
    </>
  )
}

export default page