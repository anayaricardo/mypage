import Luz from './chip.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src="https://cdn.sift.com/s.js"></script>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={Luz} className="App-logo" alt="logo" />
        <p>
          Hi! My name is Rick and I'm a <code>Computer Systems Engineer</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ricardoanaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
        <a
          className="App-link"
          href="https://github.com/anayaricardo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://twitter.com/ricky_anaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="App-link"
          href="https://tic-tac-toc-react-game.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tic-Tac-Toe
        </a>
      </header>
    </div>
  );
}

export default App;
