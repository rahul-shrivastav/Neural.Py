import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = 'Many people enjoy  spending time outdoors, especially during warm summer days. Parks, beaches, and hiking trails become popular spots where individuals and families gather. Fresh air, sunshine, and the beauty of nature help improve mood and reduce stress. Engaging in physical activities like walking, cycling, or simply relaxing on a blanket provides both mental and physical benefits. Taking time to disconnect from screens and appreciate the natural world can be refreshing and revitalizing.', speed = 10 }) => {
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
    <div className=" w-full h-full p-4 bg-transparent ">
      {/* <pre><code className='w-[20%] h-full border '> */}
      {displayedText}
      {/* </code></pre> */}
    </div>
  );
};

export default Typewriter;
