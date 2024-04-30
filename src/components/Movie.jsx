import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { ExternalLink } from "react-external-link";
import { IMDBLink } from "../data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Movie = ({ movie, likedMovie, setLikedMovie }) => {
  function clickHandler() {
    if (likedMovie.includes(movie.movietitle)) {
      setLikedMovie((prev) => prev.filter((cid) => cid !== movie.movietitle));
      toast.warning("like removed");
    } else {
      if (likedMovie.length === 0) {
        setLikedMovie([movie.movietitle]);
      } else {
        setLikedMovie((prev) => [...prev, movie.movietitle]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark opacity-80 rounded-md overflow-hidden relative ">
      <div className=" flex flex-col">
        <img src={movie.moviemainphotos} className=" aspect-[3/4]" />

        <div className="absolute top-[380px] right-4 w-[40px] h-[40px] bg-white rounded-full flex  justify-center">
          <button onClick={clickHandler}>
            {likedMovie.includes(movie.movietitle) ? (
              <FcLike fontSize={"1.75rem"} />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
        <div className="p-4 flex flex-col mt-2">
          <p className="text-white  text-xl leading-6">
            {movie.movietitle}
          </p>

            <ExternalLink href={`${IMDBLink}/${movie.imdbmovieid}`}>
              <div className="flex items-center gap-2 underline underline-offset-4 font-semibold text-lg leading-6 text-blue-100 hover:text-blue-200 duration-200 transition-all hover:tracking-tighter">
                <p> View More</p>
                <IoIosArrowDroprightCircle className=" mt-2"/>
              </div>
            </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Movie;
