import { useEffect } from 'react'
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetchData()
  }, [])
  const BIBLE_ID = "de4e12af7f28f599-02";
  const API_KEY = "4a203cf6d4603048c9008bc07df8be2a";
  const URL = "https://api.scripture.api.bible/v1/bibles";
  const getPsalmURL = (psalmIndex) => {
    return `${URL}/${BIBLE_ID}/chapters/PSA.${psalmIndex}?content-type=text`;
  };
  const fetchData = async () => {
    try {
      const response = await fetch(getPsalmURL(1), {
        method: "GET",
        headers: {
          "api-key": API_KEY,
        },
      });
      const json = await response.json();
      console.log(json.data.content);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
