import React, { useState } from 'react';
import './App.css';
import audioClips from './assets/audioClips';

function App() {
  const [display, setDisplay] = useState('');

  return (
    <div id='drum-machine' className='container'>
      <h1>Drum Machine</h1>
      <div id='display'>{display}</div>
      <section>
        {audioClips.map((clip) => (
          <Pad key={clip.keyTrigger} clip={clip} setDisplay={setDisplay} />
        ))}
      </section>
    </div>
  );
}

function Pad({ clip, setDisplay }) {
  const handlePlaySound = () => {
    const audio = document.getElementById(clip.keyTrigger);
    setDisplay(clip.id);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      handlePlaySound();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div
      className='drum-pad'
      onClick={handlePlaySound}
      id={`drum-pad-${clip.keyTrigger}`}
    >
      <audio className='clip' id={clip.keyTrigger} src={clip.url}></audio>
      {clip.keyTrigger}
    </div>
  );
}

export default App;
