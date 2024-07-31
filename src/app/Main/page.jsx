"use client"
import React from 'react';
import Link from 'next/link';



function page  () {
    
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-white min-h-screen"> 
      <header className="text-5xl text-white font-bold  font-sans">Page I</header>
      <p className="text-2xl text-teal-800 mt-8 mr-8 ml-8  box-border border-rose-800 h-50 w-70 
      border-4">

        This route is the page leading from page containing task 4 (HeaderPage) to the current page (assuming maybe a sign-in page)
      </p>
      <Link href="/Shop">
      <h1 className="text-3xl font-serif text-blue-800 mt-8 mr-6 ml-6 text-decoration-line: underline">To head to Page 2 click here</h1></Link>
    </div>
  );
};

export default page;