// src/components/ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, errorInfo: null };

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error information
    console.error("Error caught in ErrorBoundary:", error, info);
    this.setState({ errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI if there's an error
      return <div>Something went wrong. Check the console for details.</div>;
    }

    return this.props.children; // Render children normally if no error
  }
}

export default ErrorBoundary;
