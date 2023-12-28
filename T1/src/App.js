import logo from './logo.svg';
import Div from './Div'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Div>Hello, world!</Div>
      </header>
    </div>
  );
}

export default App;
