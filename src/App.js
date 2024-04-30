import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import MovieCard from "./components/MovieCard";
import MovieList from "./movies.json";
import Dropdown from "react-dropdown";

const App = () => {
  const [movies, setMovies] = useState(MovieList);
  const [keyPair, SetKeyPair] = useState(0);
  const [valuePair, setValuePair] = useState("All");
  const [likedMovie, setLikedMovie] = useState([]);
  const [favFlag, setFavFlag] = useState(false);
  const options = [
    { value: "0", label: "All" },
    {
      type: "group",
      name: "Genre",
      items: [
        { value: "1", label: "Action" },
        { value: "2", label: "Adventure" },
        { value: "3", label: "Romance" },
        { value: "4", label: "Drama" },
        { value: "5", label: "Thriller" },
        { value: "6", label: "Horror" },
        { value: "7", label: "Mystery" },
        { value: "8", label: "Sport" },
        { value: "9", label: "Biography" },
      ],
    },
    {
      type: "group",
      name: "Languages",
      items: [
        { value: "10", label: "Hindi" },
        { value: "11", label: "English" },
        { value: "12", label: "Malayalam" },
        { value: "13", label: "Kannada" },
        { value: "14", label: "Tamil" },
        { value: "15", label: "Japanese" },
        { value: "16", label: "Chinese" },
        { value: "17", label: "Spanish" },
        { value: "18", label: "Korean" },
        { value: "19", label: "Telugu" },
        { value: "20", label: "Sinhala" },
        { value: "21", label: "Bengali" },
        { value: "22", label: "Oriya" },
        { value: "23", label: "Assamese" },
      ],
    },
    {
      type: "group",
      name: "Country",
      items: [
        { value: "24", label: "India" },
        { value: "25", label: "Australia" },
        { value: "26", label: "Canada" },
        { value: "27", label: "Germany" },
        { value: "28", label: "France" },
        { value: "29", label: "United Kingdom" },
        { value: "30", label: "Ireland" },
        { value: "31", label: "Norway" },
        { value: "32", label: "United States" },
        { value: "33", label: "Singapore" },
        { value: "34", label: "Kuwait" },
        { value: "35", label: "United Arab Emirates" },
        { value: "36", label: "Ireland" },
        { value: "37", label: "Finland" },
      ],
    },
  ];
  const [defaultOption, setDefaultOption] = useState(options[0]);
  function dropdownChangeHandler(e) {
    setValuePair(e.label);
    SetKeyPair(e.value);
    setDefaultOption(e.label);
    console.log(e);
  }
  function favHandler() {
    if (favFlag) setFavFlag(false);
    else setFavFlag(true);
  }
  return (
    <div className="min-h-screen flex flex-col bg-richblack-700">
      <div>
        <Navbar />
      </div>
      <div className=" mx-auto">
        <div className=" mt-[100px] flex gap-2 items-center">
          <Dropdown
            className=" w-[180px] cursor-pointer rounded-lg p-3"
            options={options}
            onChange={(e) => dropdownChangeHandler(e)}
            value={defaultOption}
          />
          {/* <div className=" py-2 px-5 rounded-lg border border-richblack-300 bg-richblack-800 text-white hover:bg-richblack-900 transition-all duration-200 hover:scale-105 hover:border-blue-200 hover:text-blue-200">
            <button onClick={() => favHandler()}>Fav</button>
          </div> */}
        </div>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        <MovieCard
          likedMovie={likedMovie}
          setLikedMovie={setLikedMovie}
          movies={movies}
          filterNo={keyPair}
          filter={valuePair}
          favFlag={favFlag}
        />
      </div>
    </div>
  );
};

export default App;
