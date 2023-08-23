import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
/* global fetch */

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // render functions must be fast and stateless (no side effects - that's the point of the hooks).
  // const location = "Seattle, WA";
  // The order of the useState is IMPORTANT - it must be called in the same order, not varying at it.
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  // Some people make custom hooks for everything; interesting concept
  const [breeds] = useBreedList(animal);

  // Without dependencies, it will do it every single time the component is rendered.
  // With the empty array it means run it once and run it only on the initial rendering.
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  // Note that this is a controlled form, and is not considered best practice.
  // Instead, can use the uncontrolled form and grab the form values to process it

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
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
          <select
            name="breed"
            disabled={breeds.length === 0}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
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