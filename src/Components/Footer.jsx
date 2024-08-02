import React from 'react'
import Link from 'next/link'
import { RiStarSmileLine } from "react-icons/ri";

const footer = () => {
  return (
    <footer >
      
    <div className="bg-white w-full mx-auto py-2 justify-evenly flex  ">
    <RiStarSmileLine className="text-purple-900 hover:text-pink-900 mr-4" size={35}  />
        <div className="text-xl text-purple-900 underline decoration-pink-900"><Link href="/Add">Previous</Link></div>
        <div className="text-xl text-pink-900 underline decoration-purple-900"><Link href="/Next">Next</Link></div>
    </div>
    </footer>
  )
}

export default footer