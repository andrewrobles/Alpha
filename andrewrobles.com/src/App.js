import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Index from './components'
import Speaking from './components/speaking'
import Link from './components/Link'

const links = require('./links.json')

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/speaking" element={<Speaking/>}/>
        {links.map(link => <Route path={link.path} element={ <Link url={link.url}/> }/>)}
      </Routes>
    </Router>
  </div>;
}

export default App;
