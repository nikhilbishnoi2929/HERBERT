import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'; 
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 z-40 right-4 p-3 border-[1px] border-btnOrange bg-btnOrange text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <AiOutlineArrowUp size={24} />
    </button>
  );
};
export default ScrollToTopButton;
