import React from 'react'
import pic from "/public/hp.jpg"
import Image from 'next/image'

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={pic}
        alt="code"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> 
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center p-4">
        <h1 className="font-serif hover:font-mono text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-900 to-green-500 font-bold mb-5 mt-4 text-center">
          PLANTZ
        </h1>
        <div className="relative bg-clip-text text-green-800 p-5  ">
          <h2 className="text-3xl font-serif text-red-600 mb-8">ABOUT US</h2>
          <p className="text-xl  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-900 first-letter:mr-3 first-letter:float-left me-96">
            Founded in 2024 by nature enthusiasts Aashna Ferrao and Janice Dsouza, <span className="font-bold">PLANTZ</span> serves customers all over the world and are thrilled to be a part of the eco-friendly gardening industry.
          
            We believe that plants bring life and joy to any space. Our special selection of plants, pots, and gardening supplies is designed to meet the needs of every plant parent.
          </p>
          
          <p className="text-xl mb-4 me-8 text-left hover:text-center text-emerald-900 p-4 mr-0 ml-2">
            We hope you enjoy our products . If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="font-bold text-xl text-center mt-15 me-56">
            Sincerely,
            <br />
           Aashna & Janice
            <br />
            Founders of PLANTZ
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
