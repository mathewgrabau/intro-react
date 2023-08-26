import { Component } from "react";

class Carousel extends Component {
  // this is instead of hooks (because hooks are not allowed in class components)
  state = {
    active: 0,
  };

  // Static props provides a default if nothing is specified in the properties for the control.
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    // this is actually undefined, unless we use an arrow function. Need to not create new scope.
    // note that everying is a string in the DOM, so need to convert to a number (unary + operator)
    // eslint-disable-next-line no-undef
    this.setState({
      active: +e.target.dataset.index
    });
  };

  // note that you cannot use hooks in a class component. So the different items that we made like useBreedList cannot be used.

  // Must always have a render function in a class component
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
