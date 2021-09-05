import React, { useState } from "react";
import "../../App.css";

const Spotify = () => {
  const [data, setData] = useState(null);

  const handleClick = () => fetch("/api")
  .then((res) => res.json())
  .then((data) => setData(data.message));

  const handleArtistAlbums = () => fetch("/artist/43ZHCT0cAZBISjO8DG9PnE")
  .then((res) => res.json())
  .then((data) => { console.log(data.albums); setData(data.albums.href); });

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        {/* <a href="/login" className="btn btn-primary">Log in with Spotify</a> */}
        <button onClick={handleClick}>test alert</button>
        <button onClick={handleArtistAlbums}>Get Elvis's albums</button>
      </header>
    </div>
  );
};

export default Spotify;
