import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        console.log("I am at component did mount- auth req");

        console.log(this.props.authenticated);
        this.props.history.push("/signin");
      }
    }
    componentWillUpdate() {
      if (!this.props.authenticated) {
        console.log("I am at component did update");
        this.props.history.push("/signin");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.auth.token ? true : false };
  };

  return connect(mapStateToProps)(withRouter(Authentication));
}