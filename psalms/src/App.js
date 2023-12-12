import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
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
            <Route exact path="/3" element={<Chapter index={3}/>}/>
            <Route exact path="/4" element={<Chapter index={4}/>}/>
            <Route exact path="/5" element={<Chapter index={5}/>}/>
            <Route exact path="/6" element={<Chapter index={6}/>}/>
            <Route exact path="/7" element={<Chapter index={7}/>}/>
            <Route exact path="/8" element={<Chapter index={8}/>}/>
            <Route exact path="/9" element={<Chapter index={9}/>}/>
            <Route exact path="/10" element={<Chapter index={10}/>}/>
            <Route exact path="/11" element={<Chapter index={11}/>}/>
            <Route exact path="/12" element={<Chapter index={12}/>}/>
            <Route exact path="/13" element={<Chapter index={13}/>}/>
            <Route exact path="/14" element={<Chapter index={14}/>}/>
            <Route exact path="/15" element={<Chapter index={15}/>}/>
            <Route exact path="/16" element={<Chapter index={16}/>}/>
            <Route exact path="/17" element={<Chapter index={17}/>}/>
            <Route exact path="/18" element={<Chapter index={18}/>}/>
            <Route exact path="/19" element={<Chapter index={19}/>}/>
            <Route exact path="/20" element={<Chapter index={20}/>}/>
            <Route exact path="/21" element={<Chapter index={21}/>}/>
            <Route exact path="/22" element={<Chapter index={22}/>}/>
            <Route exact path="/23" element={<Chapter index={23}/>}/>
            <Route exact path="/24" element={<Chapter index={24}/>}/>
            <Route exact path="/25" element={<Chapter index={25}/>}/>
            <Route exact path="/26" element={<Chapter index={26}/>}/>
            <Route exact path="/27" element={<Chapter index={27}/>}/>
            <Route exact path="/28" element={<Chapter index={28}/>}/>
            <Route exact path="/29" element={<Chapter index={29}/>}/>
            <Route exact path="/30" element={<Chapter index={30}/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
