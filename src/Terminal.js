import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';
import Neofetch from './components/Neofetch';
import Comando from './components/Comando';

const Terminal = () => {
  useEffect(() => {
    document.title = 'diego@dev';
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [outputHistory, setOutputHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [showNeofetch, setShowNeofetch] = useState(true);
  const inputRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    atualizaCursor();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = inputValue.trim().toLowerCase();
    setCommandHistory([...commandHistory, inputValue]);

    let outputComponent = null;
    
    switch (command) {
      case 'clear':
        setOutputHistory([]);
        setCommandHistory([]);
        setShowNeofetch(false);
        document.title = 'diego@dev';
        break;
      case 'whois':
        outputComponent = <Comando enviado="whois" />;
        document.title = 'diego@dev:$ ~/whois';
        break;
      case 'ajuda':
        outputComponent = <Comando enviado="ajuda" />;
        document.title = 'diego@dev:$ ~/ajuda';
        break;
      case 'fetch':
        outputComponent = <Neofetch />;
        document.title = 'diego@dev:$ ~/fetch';
        break;
      case 'email':
        outputComponent = <Comando enviado="email"  />;
        document.title = 'diego@dev:$ ~/email';
        break;
      case 'about':
        outputComponent = <Comando enviado="about"  />;
        document.title = 'diego@dev:$ ~/about';
        break;
        case 'projetos':
          outputComponent = <Comando enviado="projetos"  />;
          document.title = 'diego@dev:$ ~/projetos';
          break;
      case 'refresh':
        window.location.reload();
        break;
      case 'social':
        outputComponent = <Comando enviado="social" />;
        document.title = 'diego@dev:$ ~/social';
        break;
      case 'linkedin':
        outputComponent = <Comando enviado="linkedin" />;
        window.open(process.env.REACT_APP_LINKEDIN, "_blank");
        break;
      case 'github':
        outputComponent = <Comando enviado="github" />;
        window.open(process.env.REACT_APP_GITHUB, "_blank");
        break;
      default:
        outputComponent = <div>Comando '<span className='usuario'>{command}</span>' não reconhecido, visualize a lista de comandos com '<span className='destaque'>ajuda</span>'.</div>;
        break;
    }

    if (outputComponent) {
      setOutputHistory([...outputHistory, outputComponent]);
    }
    setInputValue('');
  };

  const atualizaCursor = () => {
    const input = inputRef.current;
    const cursor = cursorRef.current;

    const text = input.value.substring(0, input.selectionStart);
    const span = document.createElement('span');
    span.textContent = text || '.';
    input.parentNode.appendChild(span);
    const rect = span.getBoundingClientRect();
    span.parentNode.removeChild(span);

    const offset = -4;
    cursor.style.left = (rect.width + offset) + 'px';
  };


  return (
    <div className="terminal-container">
      {showNeofetch && <Neofetch />} {/* Render Neofetch component conditionally */}
      <div className="terminal-output">
        {commandHistory.map((command, index) => (
          <div key={index}>
            <div className="terminal-input"><span className='usuario'>diego@dev</span>:<span className="destaque">~</span>$ {command}</div>
            <div className="terminal-response">{outputHistory[index]}</div>
          </div>
        ))}
      </div>
      <form className="terminal-input" onSubmit={handleSubmit}>
        <span className='input-span'><span className='usuario'>diego@dev</span>:<span className='destaque'>~</span>$</span>
        <div className="input-wrapper">
          <input
            type="text"
            className="comandos"
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
            onKeyUp={atualizaCursor}
          />
          <div className="txt-cursor" ref={cursorRef}></div>
        </div>
      </form>
    </div>
  );
};

export default Terminal;
