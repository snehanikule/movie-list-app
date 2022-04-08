import React, { useState } from 'react';
import axios from 'axios';

function NewMovie() {
  const [text, setText] = useState('');
  const [movie, setMovie] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const fetchMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=db4722b6`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <p className="sneha">Sneha Nikule Welcomes You.</p> <br />
          <p>Search Your Favourite Movie and Get every details on it</p>
          <h1 className="icon">Movie-List</h1>
          <span style={{ color: 'black' }}>Search All Movies</span>
          <form className="d-flex" onSubmit={fetchMovie}>
            <input
              className="inp"
              type="search"
              placeholder="Search"
              value={text}
              onChange={changeText}
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div id="container">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="cards" style={{ width: '18rem' }}>
                <img
                  src={value.Poster}
                  className="image_box img"
                  alt="Not Found"
                />
                <div className="card-body" key={index}>
                  <h4 className="card-title">{value.Year}</h4>
                  <h6 className="card-text">{value.Title}</h6>
                  <button className="btnSearch">Show-Movie </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default NewMovie;
