import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API");
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
});

const arrayOfObjectsMovies = [
  { id: 1, name: "Scarface" },
  { id: 2, name: "Training Day" },
  { id: 3, name: "Knock  Knock" },
  { id: 4, name: "Good Fellas" },
];

//---------------------
app.get("/api/movies", (req: Request, res: Response) => {
  res.json({ movies: arrayOfObjectsMovies });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
