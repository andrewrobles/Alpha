import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Link from './components/Link'
import Chapter from './components/Chapter'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/1" element={<Chapter index={1}/>}/>
            <Route exact path="/2" element={<Chapter index={2}/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
