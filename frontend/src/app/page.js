'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';
import { RiReactjsLine } from "react-icons/ri";



export default function Home() {
  const [prompt, setprompt] = useState('');
  const [loading, setloading] = useState(false);
  const handleChange = (event) => {
    event.preventDefault()
    setprompt(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);
  };
  return (
    <div className="flex items-center justify-center relative  h-screen bg-black overflow-clip ">



      <div className=' flex flex-col items-center justify-center z-10  sm:w-[50%] w-[85%] '>
        <div className='text-3xl w-full font-mono font-extrabold text-left py-5 md:text-5xl'>Generate <span className='text-emerald-500'>React</span> Code</div>

        <form onSubmit={handleSubmit} className=' rounded-sm text-white w-full relative -- bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-80  '>

          <textarea id="prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="Write your component description here..."
            rows={10}
            cols={90}
            className='p-3 z-10 focus:outline-none  rounded-md text-white w-full border border-slate-600 focus:border  focus:border-teal-900'  >
          </textarea>

          <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black font-mono to-cyan-300 text-[10px] font-bold p-3 absolute bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Component</button>
          <div className='w-full -z-10  opacity-15 h-full absolute top-0 left-0 bg-lines'></div>

        </form>
      </div>

      <div className='absolute top-0 m-auto flex items-center justify-center p-7'>
        <img src='./logo_text.png' width={'180px'} className=' opacity-100'></img>
      </div>
      <div className='bg-lines w-full h-full absolute top-0 left-0 opacity-[0.05] border'></div>
      <div className='circle-gradient opacity-20 blur-3xl absolute border-white border top-11/12  left-0  h-full w-full'>j</div>
      <div className='circle-gradient-t opacity-15 blur-3xl absolute border-white border bottom-10/12  left-0  h-full w-full'>j</div>
      {/* <div style={{ perspective: '1000px' }}>
        <img width={'70px'} className=' logo filter invert-50 hover:invert-0' src={'./logo1.png'}></img>
      </div> */}



    </div>
  );















};

