import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  const [text, setText] = useState("");
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
      setText(json.data.content)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {text}
      </header>
    </div>
  );
}

export default App;
