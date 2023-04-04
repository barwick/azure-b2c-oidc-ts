import { hydrate } from "preact";
import { Home } from "./home";

const rootNode: HTMLElement = document.getElementById("root")!;
console.log("Hydrating Home node");
hydrate(Home(), rootNode);
