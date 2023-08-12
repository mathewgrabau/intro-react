const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!")
    )
};

// Get the container
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// This actually renders the App element into it.
root.render(React.createElement(App));