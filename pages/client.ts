import { hydrate } from "preact";
import Home from "./home";

console.log("🐳 Hydrating root node");
const rootNode: HTMLElement = document.getElementById("root")!;
hydrate(Home, rootNode);
