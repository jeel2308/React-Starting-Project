//mostly code from the react docs

import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate() {
    // run when component receive new state or props
    if (this.state.hasError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true,
          }),
        5000
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with the listing.
          <Link to="/">Click here</Link>
          to go back to home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
