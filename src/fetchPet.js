// Contains the query definition for it
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiResult = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiResult.ok) {
    // React query will catch this error and set the error state. It is the way to pass that along/trigger it.
    // Note that it is for debugging, so can put the inforamtion in the error message.
    throw new Error(`details/${id} fetch failed - did not return ok`);
  }

  // Returning the json from the apiResult, don't need to await because it is returning a Promise.
  return apiResult.json();
};

export default fetchPet;
// Note that this is useful outside of React query as well (it is testable without the dependency on React query)
