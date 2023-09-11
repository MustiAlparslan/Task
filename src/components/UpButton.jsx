import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from '../icons';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div
        className="bg-customBlue text-white hover:opacity-50 cursor-pointer w-12 h-12 flex items-center justify-center bottom-5 fixed right-5 rounded-full shadow-md"
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp size={24} />
      </div>
    )
  );
};

export default UpButton;
