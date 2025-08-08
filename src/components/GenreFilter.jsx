export default function GenreFilter({ type, setType }) {
  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="mb-4 px-4 py-2 rounded bg-white dark:bg-gray-700"
    >
      <option value="">All Types</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
    </select>
  );
}
