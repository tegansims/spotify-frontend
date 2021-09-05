import React, { useState } from "react";
import "../../App.css";
import Spotify from "./Spotify";

const Authorise = ({ handleAuthorise }) => (
  <div className="App">
    <header className="App-header">
      <button onClick={handleAuthorise}>Authorise me</button>
    </header>
  </div>
);

const Home = () => {
  const [token, setToken] = useState();

  const handleAuthorise = () => fetch("/authorise")
  .then((res) => res.json())
  .then((token) => { console.log(token); setToken(token); });

  if (!token) return <Authorise handleAuthorise={handleAuthorise} />;
  return <Spotify />
};

export default Home;
