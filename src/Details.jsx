import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  // The key is arbitrary.
  // Means run the fetchPet if id is not in the cache
  const results = useQuery(["pet", id], fetchPet);

  // isLoading = the first one
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">--</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
    // This is required to catch the error properly.
    // Note that ommitted the props would cause the details to not get it's props.
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
