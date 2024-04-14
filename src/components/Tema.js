import { useEffect } from 'react';

const Tema = ({ cores }) => {
  // Function to change the colors
  const mudaCores = (novaCor) => {
    for (const [varNome, cor] of Object.entries(novaCor)) {
      document.documentElement.style.setProperty(`--${varNome}`, cor); // Update the variable in the :root
    }

    localStorage.setItem('tema', JSON.stringify(novaCor));
  };

  useEffect(() => {
    mudaCores(cores);
  }, [cores]); 

  return null;
};

export default Tema;
