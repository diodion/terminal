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
        document.title = 'diego@dev ~ whois/';
        break;
      case 'ajuda':
        outputComponent = <Comando enviado="ajuda" />;
        document.title = 'diego@dev ~ ajuda/';
        break;
      case 'neofetch':
        outputComponent = <Neofetch />;
        document.title = 'diego@dev';
        break;
      case 'social':
        outputComponent = <Comando enviado="social" />;
        document.title = 'diego@dev ~ social/';
        break;
      default:
        outputComponent = <div>Comando '{command}' não reconhecido, visualize a lista de comandos com '<span class='destaque'>ajuda</span>'.</div>;
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
