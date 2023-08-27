import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
/* global document */

// useRef is another hook.
// It gives the same thing back to you every time.
// Means that we act on teh same element

const Modal = ({ children }) => {
    // Need to get the modal element
    const elementRef = useRef(null);
    if (!elementRef.current) {
        elementRef.current = document.createElement("div");
    }

    // Effect appends it. Just once.
    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elementRef.current);

        // Cleanup (if class component, it would be componentWillUnmount)
        // Anything that is returned from the useEffect is the cleanup function.
        // This is called when the component is unmounted.
        return () => modalRoot.removeChild(elementRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;