'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { Prompts } from '@/components/Prompts';



export default function Home() {
  const [prompt, setprompt] = useState('');
  const [loading, setloading] = useState(true);
  const handleChange = (event) => {
    event.preventDefault()
    setprompt(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);

    const grad1 = document.getElementById('grad1');
    grad1.classList.remove('left-0');
    grad1.classList.add('left-[15%]');
    const grad2 = document.getElementById('grad2');
    grad2.classList.remove('left-0');
    grad2.classList.add('left-[15%]');

    const panel2 = document.getElementById('panel2');
    panel2.classList.remove('-right-[100%]');
    panel2.classList.add('right-0');
    const panel1 = document.getElementById('panel1');
    panel1.classList.remove('-left-[100%]');
    panel1.classList.add('left-0');

    const form = document.getElementById('form');
    form.classList.add('top-[1000px]', 'opacity-0');
    const logo = document.getElementById('logo');
    logo.classList.remove('left-1/2');
    logo.classList.add('left-[65%]');
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
            className='p-3 z-10 focus:outline-none font-extralight font-stretch-90% text-gray-300 rounded-md placeholder:text-gray-500 w-full border border-slate-600 focus:border  focus:border-teal-900'  >
          </textarea>

          <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black to-cyan-300 text-[10px] font-bold p-3 absolute font-stretch-100% bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Component</button>
          <div className='w-full -z-10  opacity-15 h-full absolute top-0 left-0 bg-lines'></div>

        </form>

      </div>

      <div id='logo' className='transition-all duration-300 fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-7'>
        <img src='./logo_text.png' width={'180px'} className=' opacity-100'></img>
      </div>

      {/* bg and GRADIENTS */}
      <div className='bg-lines w-full h-full absolute top-0 left-0 opacity-[0.05] border'></div>
      <div id='grad1' className='circle-gradient opacity-15 blur-3xl absolute border-white bottom-[70%]  left-0  h-full w-full'></div>
      <div id='grad2' className='circle-gradient-b opacity-15 blur-3xl absolute border-white top-[90%]  left-0  h-full w-full'></div>

      {/* panels */}
      <div className=' w-full h-full flex relative '>

        {/* panel1 */}
        <div id='panel1' className='w-[30%] bg-black absolute transition-all duration-500 -left-[100%]   rounded-sm h-full border-r border-slate-700/55  flex flex-col items-center justify-center'>
          <div className='w-full  relative h-[65%] overflow-y-scroll '>


            <div className=' w-full flex-1 overflow-y-scroll'>
              <Prompts number={1} text={'w-[35%] rounded-sm In Natural Language Processing (NLP), stop words are the most common words in a language that are often filtered out during text preprocessing. These words typically dont carry significant meaning on their own and are usually removed to reduce noise and focus on the important words in the text.h-full border border-teal-900 flex flex-'} />
            </div>
          </div>
          <div className='w-full h-[35%]  p-5 pt-15  flex'>
            <form id='form' onSubmit={handleSubmit} className='transition-all duration-1000 relative top-0 rounded-sm text-white w-full  -- bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-80  '>

              <textarea id="prompt2"
                value={prompt}
                onChange={handleChange}
                placeholder="Write another prompt here..."
                className='flex-1 p-3 h-full z-10 focus:outline-none text-sm font-extralight font-stretch-90% text-gray-300 rounded-md placeholder:text-gray-500 w-full border border-slate-600 focus:border  focus:border-slate-500'  >
              </textarea>

              <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black to-cyan-300 text-[10px] font-bold p-3 absolute font-stretch-100% bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Component</button>
              <div className='w-full -z-10  opacity-25 h-full absolute top-0 left-0 bg-lines'></div>

            </form>

          </div>
        </div>

        {/* panel2 */}
        <div id='panel2' className='w-[70%] absolute -right-[100%] transition-all duration-500  rounded-sm h-full flex items-center justify-center  '>

          <div className=' w-[70%] h-[75%] z-10 bg-black '>

            <div className='gradient-border relative '>
              <span className=' absolute z-10 top-3 right-3 opacity-50 text-teal-300 animate-pulse text-4xl p-4'><RiReactjsLine /></span>

              {loading && <div className='absolute left-0 top-0 w-full h-full z-30 bg-black rounded-3xl'>
                <div className='flex  flex-col items-center justify-center w-full h-full'>
                  <img width={'40px'} className='opacity-100 logo filter invert-50 hover:invert-0' src={'./logo1.png'}></img>
                  <span className='font-extralight font-mono text-[8px]'>Generating code...</span>
                </div>
              </div>}

            </div>

          </div>
        </div>

      </div>














    </div>
  );















};

