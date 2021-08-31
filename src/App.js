import Ein from './Ein.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={Ein} className="App-logo" alt="logo" />
        <p>
          Hi! My name is Rick I'm a <code>Computer Systems Engineer</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ricardoanaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </header>
    </div>
  );
}

export default App;
