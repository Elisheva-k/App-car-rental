import logo from './logo.svg';
import './App.css';
import {Main} from './my_project/pages/Main'
//import {Main} from './project/lesson6_hw_sari/Main'
// import {Main} from './my_projet_old/pages/Main'

function App() {
  return (
    <div className="App">
      {/* <0  className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Main></Main>
    </div>
  );
}

export default App;
