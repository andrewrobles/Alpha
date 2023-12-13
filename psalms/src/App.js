import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Chapter from './components/Chapter'
import BasicList from './components/BasicList'

const App = () => {
  const arrayOfIndexes = [...Array(150).keys()];
  const arrayOfPsalms = [{ label: 'Psalm 1' }, { label: 'Psalm 2' }]
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<BasicList items={arrayOfPsalms}/>}/>
            <Route exact path="/temp" element={<Home/>}/>
            {arrayOfIndexes.map((value, index) => {
              return <Route exact path={`/${index + 1}`} element={<Chapter index={index + 1}/>}/>
            })}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
