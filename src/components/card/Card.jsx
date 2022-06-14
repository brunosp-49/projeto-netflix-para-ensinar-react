import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetDetail, getList } from "../../api/api";
import { CardContainer, Grid } from "./CardStyle";
import { useDispatch } from "react-redux";
import { goToDetail, getMovieInfo } from "../../redux/counterSlice";

export const Card = () => {
  var [movies, setMovies] = useState();
  var [movieDetail, setMovieDetail] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    getList(setMovies);
  }, []);

  useEffect(()=>{
    dispatch(getMovieInfo(movieDetail))
  },[movieDetail])

  const onHoverDetail = (e) =>{
    GetDetail(e.target.id, setMovieDetail)
  }

  return (
    <Grid>
      {!movies ? "Loading..." : 
        <>
          {movies.map((movie) => {
            return (
              <CardContainer key={movie.id} onClick={() =>dispatch(goToDetail())} to="/detail" onMouseEnter={onHoverDetail} id={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  id={movie.id}
                />
                <div className="infoContainer" id={movie.id}>
                  <h4>Título: {movie.title}</h4>
                  <h4>Nota: {movie.vote_average}</h4>
                </div>
              </CardContainer>
            );
          })}
        </>
      }
    </Grid>
  );
};
