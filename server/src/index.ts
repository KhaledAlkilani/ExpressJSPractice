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

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
