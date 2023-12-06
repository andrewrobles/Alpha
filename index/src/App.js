import { Routes, Route } from 'react-router-dom'
import Link from './components/Link'

const links = require('./links.json')

function App() {
  return <Routes>
      {/* <Route path='/' element={ <></> }/> */}
      {links.map(link => <Route path={link.path} element={ <Link url={link.url}/> }/>)}
  </Routes>
}

export default App;
