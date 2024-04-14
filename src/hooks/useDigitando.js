import { useState, useEffect } from 'react';

const useDigitando = (lines) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + lines[index] + '\n');
        setIndex((prevIndex) => prevIndex + 1);
      }, 25); // Adjust typing speed here (in milliseconds)

      return () => clearInterval(intervalId);
    }
  }, [index, lines]);

  return displayText;
};

export default useDigitando;
