import React, { Component } from "react";
import { Button, TextField, Snackbar } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const vertical = "bottom";
const horizontal = "center";

class SignIn extends Component {
  state = {
    email: "mon@email.com",
    password: "monPassw0rd",
    signin: false,
    flash: "",
    open: false,
  };

  updateEmailField = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  updatePwdField = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.hasOwnProperty("user")) {
          this.props.dispatch({
            type: "CREATE_SESSION",
            token: data.token,
          });
          this.setState({ flash: data.message, signin: true });
        } else {
          this.setState({ flash: data.message, signin: true });
          console.log(this.state.flash);
        }
      })
      .catch((err) => this.setState({ flash: err.flash }));

    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false, signin: false });
  };

  render() {
    if (this.state.signin === true) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="signin_maincontainer">
        <Link to="/signup">Sign Up</Link>

        <h1>Sign in!!</h1>
        <form onSubmit={this.handleSubmit} className="signin_container">
          <TextField
            label="email"
            type="email"
            name="email"
            onChange={this.updateEmailField}
          />
          <TextField
            label="password"
            type="text"
            name="password"
            onChange={this.updatePwdField}
          />

          <Button
            className="button_form"
            variant="contained"
            color="primary"
            value="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={this.state.open}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    flash: state.auth.token,
  };
};
export default connect(mapStateToProps)(SignIn);