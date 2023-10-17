import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) =>
  res.send("Hello Typescript Server")
);

export default app;
