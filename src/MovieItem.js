import React from "react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  return (
    <div className="cardgrid col-sm-12">
      <div id="imagecard" className="col-sm-2" >
        <img width="35"
          src={`https://image.tmdb.org/t/p/w200` + props.poster_path}
          alt={props.title}
        />
      </div>
      <Link  className="col-sm-9"
        to={`/movie/${props.movieId}`}
        style={{ textDecoration: "none" }}
      >
        <div className="cardtitle">{props.original_title}</div>
      </Link>
    </div>
  );
};

export default MovieItem;
