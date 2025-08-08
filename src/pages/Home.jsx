import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import GenreFilter from "../components/GenreFilter";

export default function Home() {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const url = `https://www.omdbapi.com/?apikey=382a38d9&s=${query}${type ? `&type=${type}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.Search || []);
    }
    fetchMovies();
  }, [query, type]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie..."
          className="flex-1 p-2 rounded border dark:bg-gray-700"
        />
        <GenreFilter type={type} setType={setType} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
}
