import { useEffect, useState } from "react";

interface Movies {
  id: number;
  name: string;
}

export default function App() {
  const [message, setMessage] = useState<string>("");
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data.movies))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold text-center">
        This is data from express.js server: {message}
      </h1>
      <div className="flex flex-col p-5">
        <h1>List of Movies</h1>
        {movies.map((movie) => (
          <li>{movie.name}</li>
        ))}
      </div>
    </div>
  );
}
