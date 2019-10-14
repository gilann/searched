import React from "react";
import "tachyons";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  console.log(movie);
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie ma4 bg-light-purple dib grow">
      { 
        (movie.Title.length<=15) &&
        <h3>{movie.Title}</h3>
      }
      { 
        (movie.Title.length>15) &&
        <h4>{movie.Title}</h4>
      }
      <div>
        <img
          width="200"
          height="250"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;
