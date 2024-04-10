import logo from './2747431.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import Registro from './component/Registro';
function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <Button variant = "primary" >..</Button>{''}
        <Registro />

      </header>
    </div>
  );
}

export default App;
