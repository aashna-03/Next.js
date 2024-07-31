"use client"
import React from 'react';
import Link from 'next/link';



function page () {
  return (
    <div className="bg-gradient-to-r from-red-400 to-slate-200 min-h-screen">
    <header className="text-5xl text-white font-style: italic">Page II</header>
    <p className="text-3xl text-red-900 mt-8 mr-8 ml-8 ">This route is the page leading from page I to page II(assuming entering personal details page)</p>
    <Link href="/">
    <h1 className="text-3xl font-style-italic text-purple-800 mt-8 mr-6 ml-6 text-decoration-line: underline ">
   Go back to the Home Page</h1>
</Link>

</div>
)

}

export default page