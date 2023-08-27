import { Component } from "react";
import { Link } from "react-router-dom";

/* global console */

// Must use the class component for the error boundary
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // typically logging the error to an error reporting service
        console.error("Error boundary component caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing. <Link to="/">Return to the home page.</Link>
                </h2>
            )
        }

        // Return the contents if there is no error.
        return this.props.children;
    }
}

export default ErrorBoundary;
