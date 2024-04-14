import { useState, useEffect } from 'react';

const useDigitando = (lines) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + lines[index] + '\n');
        setIndex((prevIndex) => prevIndex + 1);
      }, 40); 

      return () => clearInterval(intervalId);
    }
  }, [index, lines]);

  useEffect(() => {
    if (displayText) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [displayText]);

  return displayText;
};

export default useDigitando;
