import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { auth as authMiddleware } from "express-openid-connect";
import preactViewEngine from "express-preact-views";

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

app.listen(port, () => {
  console.log(`👾 [Server]: Server is running at http://localhost:${port}`);
});
