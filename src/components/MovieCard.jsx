import React, { useEffect, useState } from "react";
import Movie from "./Movie";
const MovieCard = ({likedMovie,setLikedMovie, movies, filterNo,filter,favFlag }) => {
  
  const [filterData, setFilterData] = useState([movies]);

  useEffect(() => {
    function setData(num,name) {
      if (name == "All") setFilterData(movies);
      else if(parseInt(num)<10)
      {
        let filtered = [];
        movies.forEach((movie) => {
          movie.moviegenres.forEach((genre) => {
            if (genre === name) {
              filtered.push(movie);
            }
          });
        });
        if (filtered.length != 0) setFilterData(filtered);
        console.log(filterData);
      }
      else if(parseInt(num)<24)
      {
        let filtered = [];
        movies.forEach((movie) => {
          movie.movielanguages.forEach((lang) => {
            if (lang === name) {
              filtered.push(movie);
            }
          });
        });
        if (filtered.length != 0) setFilterData(filtered);
        console.log(filterData);
      }
      else {
        let filtered = [];
        movies.forEach((movie) => {
          movie.moviecountries.forEach((count) => {
            if (count === name) {
              filtered.push(movie);
            }
          });
        });
        if (filtered.length != 0) setFilterData(filtered);
        console.log(filterData);
      }
    }
    setData(filterNo,filter);
  }, [filterNo]);

  return (
    <div className=" flex flex-wrap justify-center gap-6 mb-4">
      {!favFlag && filterData.map((i, index) => {
        return (
          <Movie
            key={index}
            movie={i}
            likedMovie={likedMovie}
            setLikedMovie={setLikedMovie}
          />
        );
      })}
      {favFlag && filterData.map((i, index) => {
        return (
          <Movie
            key={index}
            movie={i}
            likedMovie={likedMovie}
            setLikedMovie={setLikedMovie}
          />
        );
      })}
      
    </div>
  );
};

export default MovieCard;
