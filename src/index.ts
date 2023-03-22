import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("It's working!!!");
})

app.listen(3000, 
  () => console.log("Server running at http://localhost:3000")
);