/* global document */
// Added just to get the eslint highlighting to process correctly.
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

// Create a client, allowing infinite caching (not a good idea in production, but since the app is unlikely to have new data, it's fine!)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// The components that wrap, doesn't mean that it displays anything. They just provide context into the lower context.
// While it looks awkward, it does allow control around the context exposed to a given area.

const App = () => {
  const adoptedPetHook = useState(null);
  // The provider is like a wormhole - you can put whatever you want in it, and it's available. It's a way of getting the information to move around.
  // The whole hook is being passed, so that the context can be updated. It is read and write. The provider doesn't care.
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <div>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// Get the container
const container = document.getElementById("root");
const root = createRoot(container);
// This actually renders the App element into it.
root.render(<App />);
