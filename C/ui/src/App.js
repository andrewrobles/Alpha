import logo from "./logo.svg";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";

function App() {
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLRPzJR7eEOFwPlqZuEjFCeo5AWoMQvxU",
    authDomain: "coffee-fec3b.firebaseapp.com",
    projectId: "coffee-fec3b",
    storageBucket: "coffee-fec3b.appspot.com",
    messagingSenderId: "581575190040",
    appId: "1:581575190040:web:718f13728c206d6458056d",
    measurementId: "G-2FTTEGG9P5"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(() => {
    console.log("analytics:");
    console.log(analytics)
  });

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
