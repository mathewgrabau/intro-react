const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Pepper",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Meow",
      breed: "Mixed",
    }),
  ]);
};

// Get the container
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// This actually renders the App element into it.
root.render(React.createElement(App));
