import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chapter from './components/Chapter'
import BasicList from './components/BasicList'

const App = () => {
  const arrayOfIndexes = [...Array(150).keys()];
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<BasicList indexes={arrayOfIndexes}/>}/>
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
