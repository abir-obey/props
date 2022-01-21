import React from "react";
import { moviesData } from "../../constant/data";
import Movie from "../Movie/Movie";
import "./MoviesList.css";

const MoviesList = () => {
  return (
    <div>
      <h1 className="title">Movies list</h1>
      <div>
        {moviesData.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
      <hr />
      <h1 className="title">List of movies filtred:</h1>
      {moviesData
        .filter((movie) => movie.type === "Action")
        .map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviesList;
