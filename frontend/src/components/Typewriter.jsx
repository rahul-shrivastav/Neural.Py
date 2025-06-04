import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = 'Your code will be generated here...', speed = 10 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      index++;
      setDisplayedText((prev) => prev + text.charAt(index));
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className=" w-full h-full p-4 bg-transparent font-extralight font-mono text-[16px]">
      {/* <pre><code className='w-[20%] h-full border '> */}
      {displayedText}
      {/* </code></pre> */}
    </div>
  );
};

export default Typewriter;
