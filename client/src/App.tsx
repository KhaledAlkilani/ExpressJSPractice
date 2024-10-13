import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold text-center">
        This is data from express.js server: {message}
      </h1>
    </div>
  );
}
