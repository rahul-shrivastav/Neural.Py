'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';



export default function Home() {

  return (
    <div className="flex items-center justify-center relative  h-screen bg-black overflow-clip ">



      <div className=' flex flex-col items-center justify-center z-10 '>
        <div className='text-5xl w-full font-mono font-extrabold text-left py-5'>Generate <span className='text-emerald-500'>React</span> Code</div>
        <form className='  opacity-30 rounded-sm text-white'>
          <textarea id="message"
            // value={text}
            // onChange={handleChange}

            placeholder="  Write your component description here..."
            rows={10}
            cols={90}
            className='p-3 text-white border'  >

          </textarea>

        </form>


      </div>
      <div className='absolute top-0 m-auto flex items-center justify-center p-7'>
        <img src='./logo_text.png' width={'160px'} className=' opacity-100'></img>
      </div>
      <div className='bg-lines w-full h-full absolute top-0 left-0 opacity-15 border'></div>
      <div className='circle-gradient opacity-15 blur-3xl absolute border-white border top-10/12  left-0  h-full w-full'>j</div>
      {/* <div style={{ perspective: '1000px' }}>
        <img width={'70px'} className=' logo filter invert-50 hover:invert-0' src={'./logo1.png'}></img>
      </div> */}



    </div>
  );















};

