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

    const form = document.getElementById('form');
    form.classList.add('top-[1000px]', 'opacity-0');
    const font1 = document.getElementById('font1');
    font1.classList.add('top-[-1000px]', 'opacity-0');
    const font2 = document.getElementById('font2');
    font2.classList.add('top-[-1000px]', 'opacity-0');
  };
  return (
    <div className=" relative w-screen  h-screen bg-black overflow-clip ">



      <div className='fixed top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10  sm:w-[50%] w-[85%]'>
        <div id='font1' className='text-5xl w-full font-mono font-extrabold text-center md:text-6xl transition-all duration-1000 relative top-0'>Generate <span className=' font-bold bg-gradient-to-r from-cyan-600 via-emerald-400 to-emerald-600 bg-clip-text text-transparent'>React</span> Code</div>
        <div id='font2' className='text-sm my-4 w-full font-mono font-bold  text-center md:my-8 md:text-2xl text-slate-300 transition-all duration-1000 relative top-0'>What do you want to build ?</div>

        <form id='form' onSubmit={handleSubmit} className='transition-all duration-1000 relative top-0 rounded-sm text-white w-full  -- bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-80  '>

          <textarea id="prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="Write your component description here..."
            rows={10}
            cols={90}
            className='p-3 z-10 focus:outline-none  rounded-md text-white w-full border border-slate-600 focus:border  focus:border-teal-900'  >
          </textarea>

          <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black to-cyan-300 text-[10px] font-bold p-3 absolute font-stretch-100% bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Component</button>
          <div className='w-full -z-10  opacity-15 h-full absolute top-0 left-0 bg-lines'></div>

        </form>

      </div>

      <div className='fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-7'>
        <img src='./logo_text.png' width={'180px'} className=' opacity-100'></img>
      </div>

      <div className='bg-lines w-full h-full absolute top-0 left-0 opacity-[0.05] border'></div>
      <div className='circle-gradient opacity-20 blur-3xl absolute border-white border top-[99%]  left-0  h-full w-full'></div>
      <div className='circle-gradient-t opacity-15 blur-3xl absolute border-white border bottom-11/12  left-0  h-full w-full'></div>

      {/* loading screen */}
      {loading &&
        <div className='h-full w-full absolute top-0 left-0 z-20 flex items-center justify-center backdrop backdrop-blur-xl bg-black/10 '>

          <div className='flex  flex-col items-center justify-center'>
            <img width={'70px'} className='opacity-100 logo filter invert-50 hover:invert-0' src={'./logo1.png'}></img>
            <span className='font-extralight font-mono text-[8px]'>Generating code...</span>
          </div>

        </div>
      } 



    </div>
  );















};

