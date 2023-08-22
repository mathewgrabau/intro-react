import { useState } from "react";

const SearchParams = () => {
    // render functions must be fast and stateless (no side effects - that's the point of the hooks).
  // const location = "Seattle, WA";
  // The order of the useState is IMPORTANT - it must be called in the same order, not varying at it.
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
