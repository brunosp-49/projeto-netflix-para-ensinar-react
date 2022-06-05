import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api/api";
import { CardContainer, Grid } from "./CardStyle";

export const Card = () => {
  var [movies, setMovies] = useState();
  var [render, setRender] = useState(false);
  useEffect(() => {
    api(setMovies);
    setTimeout(() => setRender(true), 5);
  }, []);
  return (
    <Grid>
      {render && (
        <>
          {movies.map((movie) => {
            return (
              <CardContainer key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <div className="infoContainer">
                  <h4>Título: {movie.original_title}</h4>
                  <h4>Nota: {movie.vote_average}</h4>
                </div>
              </CardContainer>
            );
          })}
        </>
      )}
    </Grid>
  );
};
