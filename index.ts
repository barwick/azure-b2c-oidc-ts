import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Home from "./pages/home";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static("dist"));

app.get("/", (req: Request, res: Response) => {
  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <title>OIDC Client - Azure B2C</title>
      </head>
      <body>
          <div id="app">${Home}</div>
          <script src="./home.js"></script>
      </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`👾 [Server]: Server is running at http://localhost:${port}`);
});