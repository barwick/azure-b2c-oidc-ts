import { render } from "preact-render-to-string";

export const Home = () => {
  console.log("🚨 TESTING HERE TESTING");
  // console.log("🚨 Locals: ", locals);
  return <p>Hello World!</p>;
};

const buildHome = () => {
  return render(<Home />);
};

export default buildHome;
