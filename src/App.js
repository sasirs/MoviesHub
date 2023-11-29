import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";

const apiUrl = "http://www.omdbapi.com/?apikey=a68eba80";

const App = () => {
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (title) => {
    console.log("searching " + title);
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    //console.log("search " + data.Search);
  };

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSerchTerm] = useState("");
  //  console.log(movies);
  return (
    <div className="app">
      <h1>MoviesHub</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSerchTerm(e.target.value)}></input>
        {/* <SearchIcon alt="+" onClick={() => searchMovies("batman")} /> */}
        <span alt="+" onClick={() => searchMovies(searchTerm)}>
          <SearchIcon />
        </span>
        {/* <img src={<SearchIcon />} alt="+" onClick={() => searchMovies("batman")} /> */}
      </div>
      {/* {console.log(movies)} */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No Movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
