import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(`https://www.omdbapi.com/?apikey=382a38d9&i=${id}&plot=full`);
      const data = await res.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  function toggleFavorite() {
    const updated = favorites.some(m => m.imdbID === movie.imdbID)
      ? favorites.filter(m => m.imdbID !== movie.imdbID)
      : [...favorites, movie];

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  }

  if (!movie) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded shadow" />
        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p className="italic">{movie.Genre} | {movie.Year}</p>
          <p className="my-4">{movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Rating:</strong> ⭐ {movie.imdbRating}</p>

          <button
            onClick={toggleFavorite}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {favorites.some(m => m.imdbID === movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}
