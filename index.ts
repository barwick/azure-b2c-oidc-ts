import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { auth as authMiddleware } from "express-openid-connect";

import buildHome from "./pages/home";

dotenv.config();
const app: Express = express();
const port: number = parseInt(process.env.PORT || "80") || 80;

// Set up Auth middleware (OpenID)
app.use(authMiddleware());
app.set("trust proxy", true);

// Serve JS files from dist
app.use(express.static("dist"));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

// Simple html wrapper to render the homepage
app.get("/", (req: Request, res: Response) => {
  // res.render(); // TODO https://github.com/edwjusti/express-preact-views
  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <title>OIDC Client - Azure B2C</title>
      </head>
      <body>
          <div id="root">${buildHome()}</div>
          <script type="module" src="client.js" async></script>
      </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`👾 [Server]: Server is running at http://localhost:${port}`);
});
