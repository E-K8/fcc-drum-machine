import './App.css';
import audioClips from './assets/audioClips';

function App() {
  return (
    <div className='container'>
      <h1>Drum Machine</h1>
      <section>
        {audioClips.map((clip) => {
          <Pad key={(clip, id)} clip={clip} />;
        })}
      </section>
    </div>
  );
}

function Pad({ clip }) {
  return (
    <div>
      <audio id={clip.keyTrigger} src={clip.url}></audio>
      {clip.keyTrigger}
    </div>
  );
}

export default App;
