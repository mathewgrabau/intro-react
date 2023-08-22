/* global document */
// Added just to get the eslint highlighting to process correctly.
import { createRoot } from "react-dom/client";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// Get the container
const container = document.getElementById("root");
const root = createRoot(container);
// This actually renders the App element into it.
root.render(<App />);
