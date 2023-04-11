import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { auth as authMiddleware } from "express-openid-connect";
import preactViewEngine from "express-preact-views";
import fs from "fs";
import https from "https";

dotenv.config();
const app: Express = express();
const port: number = parseInt(process.env.PORT || "80") || 80;

// Set up the Preact view engine allowing us to use express SSR
app.set("views", __dirname + "/pages");
app.set("view engine", "js");
app.engine("js", preactViewEngine.createEngine({ transformViews: false })); // use rollup to do our transpiling

// Set up Auth middleware (OpenID)
app.use(authMiddleware({ authRequired: false }));
app.set("trust proxy", true);

// Serve JS files from dist
app.use(express.static("dist"));

// Use SSR (Server Side Rendering) to load our view and inject auth data from middleware
app.get("/", (req: Request, res: Response) => {
  res.render("home", {
    user: req.oidc.user,
  });
});

let onStart = () => {
  console.log(`👾 [Server]: Server is running at https://localhost:${port}`);
};

if (!process.env.IS_PRODUCTION) {
  const httpsOptions = {
    // certs for localhost over https
    key: fs.readFileSync("./certs/localhost.key"),
    cert: fs.readFileSync("./certs/localhost.pem"),
  };
  console.log(`👾 [Server]: Server running in DEV mode`);
  https.createServer(httpsOptions, app).listen(port, onStart);
} else {
  app.listen(port, onStart);
}
