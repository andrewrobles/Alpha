import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bio from './components/Bio/Bio'
import Speaking from './components/Speaking'
import Link from './components/Link'
import "./App.css";

const links = require('./links.json')

function App() {
  return <div class="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Bio/>}/>
        <Route exact path="/speaking" element={<Speaking/>}/>
        {links.map(link => <Route path={link.path} element={ <Link url={link.url}/> }/>)}
      </Routes>
    </Router>
  </div>;
}

export default App;
