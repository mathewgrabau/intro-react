/* global document */
// Added just to get the eslint highlighting to process correctly.
import { createRoot } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (<div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Parrot" />
    <Pet name="Meow" animal="Cat" breed="Mixed" />
  </div>);
};

// Get the container
const container = document.getElementById("root");
const root = createRoot(container);
// This actually renders the App element into it.
root.render(<App />);
