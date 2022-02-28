import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Subtitle from './components/Subtitle/Subtitle';
//import Project from './components/Project/Project';
//import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Subtitle></Subtitle>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
