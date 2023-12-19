import "./App.css";
import Bio from './components/bio'
import drew from './drew.jpg'

function App() {
  return <div>
    <img src={drew} width={175}/>
    <Bio/>
  </div>;
}

export default App;
