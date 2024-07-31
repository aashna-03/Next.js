"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

function HeaderPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log('going');
    router.push('/Main');
  };

  return (
    <div className="bg-black width-screen height-screen ">
      <div>
        <Link href="/Main">
         
        </Link>
        <h1 className="font-serif relative text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-900 mb-10 mt-0 align-text-top inline-block  px-10">
          Hey there, My name is Aashna!
        </h1>
        <p className="text-2xl container  mx-auto px-5 py-5 mt-8 mb-10 static font-serif font-light bg-purple-400 border-4 ">
          I love to bake, cook, read books, watch movies and series and also play chess. Well Im not a great player but I solve chess puzzles, and play chess games with my friends. Moreover I'm always updated about the latest chess tournaments and news! Cooking and baking on the other hand is something that is sophisticated and very satisfying when whatever you imagine comes onto the platter..
        </p>
        <p className="bg-purple-600 hover:bg-pink-400 active:bg-violet-700 font-sans text-xl text-center md:container ml-8 mr-8 mt-6 p-6">
          It is quite good to learn in small bits like this.
        </p>
        <button
          onClick={handleClick}
          className="items-center text-xl font-bold px-6 py-3 w-full sm:w-fit rounded-full mt-8 ml-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
        >
          MORE
        </button>
        <h2 className="bg-black container text-white text-4xl mt-6 text-center font-bold">
          Have a nice day :)
        </h2>
      </div>
    </div>
  );
}

export default HeaderPage;