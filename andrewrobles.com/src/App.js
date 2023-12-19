import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Index from './components'
import Speaking from './components/speaking'

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/speaking" element={<Speaking/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
