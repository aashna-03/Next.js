'use client'
import React from 'react'

const Page=()=>{
  
    return(
      <div className=' p-4 text-xl bg-emerald-900 w-screen h-screen flex' >
        <h1 className='font-sans hover:font-serif text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-400 via-yellow-200 to-pink-600 font-bold mb-5 mt-4 ">
'>Flower pots</h1>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl '>
      <div className='absolute w-full h-full  rounded-xl text-white'>
        <h2 className='font-serif text-2xl   '>Jasmine Plant</h2>
        <p className='px-2 text-black   font-bold'>$15.00</p>
        
          <button className='border-green-900 border-2 bg-white  sm:w-fit rounded-full text-black mx-2 absolute my-48 hover:bg-green-500 text-justify p-2 font-bold'>Buy</button>
        </div>
        <img
        className='w-85 h-60 mt-8 '
          src='https://nurserylive.com/cdn/shop/collections/nurserylive-jasmine-plants-category-image.jpg?v=1681381487'
          alt='/'
        />
      </div></div>
      



     <div className='flex justify-center' >
     <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      
      <div className='rounded-xl '>
      <div className='absolute w-full h-full  rounded-xl text-white'>
        <h2 className='font-serif text-2xl  '>Bougainvillea Plant</h2>
        <p className='px-2 text-black align-bottom font-bold'>$15.00</p>
          <button className='border-green-900 border-2 bg-white  sm:w-fit rounded-full text-black  absolute my-48 align-bottom hover:bg-pink-500 text-justify p-2 font-bold'>Buy</button>
        </div>
        <img
        className='w-85 h-60 mt-8  '
          src='https://nurserylive.com/cdn/shop/products/nurserylive-g-bougainvillea-pink-plant.jpg?v=1634214812'
          alt='/'
        />
      </div></div>



      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      
      <div className='rounded-xl '>
      <div className='absolute w-full h-full  rounded-xl text-white'>
        <h2 className='font-serif text-2xl  '>Allamanda Plant</h2>
        <p className='px-2 text-black align-bottom font-bold'>$15.00</p>
          <button className='border-green-900 border-2 bg-white  sm:w-fit rounded-full text-black  my-48  hover:bg-yellow-400 text-justify p-2 font-bold'>Buy</button>
        </div>
        <img
        className='w-85 h-60 mt-8 '
          src='https://m.media-amazon.com/images/I/61d69NcnluL.jpg'
          alt='/'
        />
      </div></div>


     



      
      
      


     


  


     


        
        






       <div/> 
      </div>
      </div>
      
      
        
    )

}
export default Page;