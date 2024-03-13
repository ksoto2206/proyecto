import logo from './2747431.svg';
import './App.css';
import {Button, Form} from 'react-bootstrap';
function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          callabo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <Button variant = "primary" >sí</Button>{''}

      </header>
    </div>
  );
}

export default App;
