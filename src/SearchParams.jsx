import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// Can be a hybrid form in terms of controlled/uncontrolled
const SearchParams = () => {
  // the requestParams that is being
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  // render functions must be fast and stateless (no side effects - that's the point of the hooks).
  // const location = "Seattle, WA";
  // The order of the useState is IMPORTANT - it must be called in the same order, not varying at it.
  const [animal, setAnimal] = useState("");
  // Some people make custom hooks for everything; interesting concept
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  // Note that this is a controlled form, and is not considered best practice.
  // Instead, can use the uncontrolled form and grab the form values to process it

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // This is a browser API (pulls out the data from the form into the formData object)
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" disabled={breeds.length === 0} id="breed">
            <option />
            {breeds.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
