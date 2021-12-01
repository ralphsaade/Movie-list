import React, { useState, useEffect, useContext  } from "react";
import { Link } from "react-router-dom";
 
import { useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const constructUrlG = (path) => {
  return `${TMDB_BASE_URL}/movie/${path}?api_key=e10d4a17679f35fc3b259c917bdf9e12`;
};
const constructUrlT = (path, query) => {
  return `${TMDB_BASE_URL}/movie/${path}/${query}?api_key=e10d4a17679f35fc3b259c917bdf9e12`;
};

const Movie = (props) => {
  const [movieData, setMovieData] = useState(null);
  

  const { id: idx } = useParams();
  console.log(idx);
  useEffect(() => {
    fetch(constructUrlG(idx))
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [idx]);

 

  return (
    <div>
      {movieData && (
        <div>
          <div id="moviecont">
            <div id="postercont">
              <img
                src={
                  `https://image.tmdb.org/t/p/w500` + movieData.backdrop_path
                }
                alt={movieData.title}
                className="image2"
              />
              <h1 id="title">{movieData.original_title}</h1>
              <h4 id="reldate">Date Sortie: {movieData.release_date}</h4>
              <h4 id="rate">Votes: {movieData.vote_average}/10</h4>
              <div className="back">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="back">
                    <MdArrowBack size="2em" /> Back{" "}
                  </div>
                </Link>
              </div>
            </div>
            <div id="infocont">
              <h5 id="info">
                {" "}
                <u>Résumé:</u>{" "}
              </h5>
              <p> {movieData.overview} </p>

               

              <h5 className="info">
                {" "}
                <u>Genres:</u>{" "}
              </h5>
              <div>
                {" "}
                {movieData.genres.map((val) => (
                  <span key={val.id}>{val.name} /</span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Movie;
