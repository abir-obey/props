import React from "react";
import "./Movie.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const Movie = ({ movie }) => {
  return (
    <div id="container">
      <img className="image" src={movie.image} alt={movie.name} width={200} />
      <h2 className="name">Name: {movie.name}</h2>
      <h2 className="date">date: {movie.date}</h2>
      <h2 className="type">type: {movie.type}</h2>

      <Rating
        name="text-feedback"
        value={movie.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <p className="description">{movie.description}</p>
    </div>
  );
};

export default Movie;
