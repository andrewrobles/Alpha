import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from './components/Link'
import Chapter from './components/Chapter'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Link/>}/>
            <Route exact path="/1" element={<Chapter/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
