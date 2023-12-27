
import './RoundProgressBar.css'

import { useEffect, useState } from 'react';
import { Circle } from 'rc-progress';



const ProgressionBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
 
  return (
    <>
    <div className='p-bar'>
  <div className='svg-path'>
      <Circle
        percent={scrollPercentage}
        gapDegree={100}
        gapPosition='left'
        strokeColor='blue'
        trailColor='gray'
      />
    </div>
    <div className='svg-img'>
    <img  src='/svg with paths.svg'/>
    </div>
    </div>
    
    </>
  )
}

export default ProgressionBar