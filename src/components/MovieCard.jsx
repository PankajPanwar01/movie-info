
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-white dark:bg-gray-700 shadow rounded p-2 hover:scale-105 transition-all">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
        <h2 className="mt-2 font-semibold">{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
}
