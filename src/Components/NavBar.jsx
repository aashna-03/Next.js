
import React from 'react';


function Navbar() {
  return (
    <nav >
      <div className="bg-white w-full mx-auto py-4 justify-evenly flex  ">
           
  
       <div>
        <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900  hover:border-transparent rounded ">Home</button>
       </div>
      
       <div>
        <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900  hover:border-transparent rounded ">Support</button>
       </div>
       
       <div>
        <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900  hover:border-transparent rounded ">Contact</button>
       </div>
        
     </div>
    </nav>
  );
}

export default Navbar;
