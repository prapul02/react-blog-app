import React, { Component } from "react";

class PageErrorBoundary extends Component {
  static getDerivedStateFromError(err) {
    return {
      isCrashed: true
    };
  }

  state = {
    isCrashed: false
  };

  componentDidCatch(error, errorInfo) {
    // send error to an error tracking service
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;

    if (!this.state.isCrashed) {
      return children;
    }

    return <h1>Something went wrong here...</h1>;
  }
}

export default PageErrorBoundary;
