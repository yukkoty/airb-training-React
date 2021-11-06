import logo from './logo.svg';
import './App.css';
import forrest2 from './forrest2.jpeg'
import Tab from './Tab';
import Message from './Message';
import Button from './Button';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={forrest2} />

        <Tab/>
        <SearchBar/>
        <Message/>
        <Button/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.        </p>
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
