import { useState,useEffect,useRef } from "react";
import './RoundProgressBar.css'

const ProgressionBar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lineWidth, setLineWidth] = useState(0);
  const progressBarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const totalPages = 7;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      const scrolledPercentage = (scrollPosition / (totalHeight - windowHeight)) * 100;
      const currentPage = Math.ceil((scrolledPercentage / 100) * totalPages);

      setCurrentPage(currentPage);
      setLineWidth(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to the corresponding section/page using the ref
    
  };

  return (
    <>
        <div className="progress-bar" ref={progressBarRef}>
      <div
        className="progress-bar-line"
        style={{ width: `${lineWidth}%` }}
      />
      {Array.from({ length: 7 }, (_, index) => (
        <div
          key={index}
          className={`progress-bar-point ${index + 1 <= currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        />
      ))}
    </div>
    </>
  )
}

export default ProgressionBar