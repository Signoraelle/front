import React, { Component } from "react";
import { Button, TextField, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const vertical = "bottom";
const horizontal = "center";
class SignUp extends Component {
  state = {
    email: "mon@email.com",
    password: "monPassw0rd",
    name: "James",
    lastname: "Bond",
    flash: "",
    open: false
  };
  updateEmailField = e => {
    this.setState({
      email: e.target.value
    });
  };
  updatePwdField = e => {
    this.setState({
      password: e.target.value
    });
  };

  updateNameField = e => {
    this.setState({
      name: e.target.value
    });
  };
  updateLastnameField = e => {
    this.setState({
      lastname: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => this.setState({ flash: res.flash }))
      .catch(err => this.setState({ flash: err.flash }));
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="signup_maincontainer">
        <Link to="/signin">Sign In</Link>

        <h1>Sign up!!</h1>
        <form onSubmit={this.handleSubmit} className="signup_container">
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
          <TextField
            label="confirm password"
            type="text"
            name="password_confirm"
          />
          <TextField
            label="name"
            type="text"
            name="name"
            onChange={this.updateNameField}
          />
          <TextField
            label="last name"
            type="text"
            name="lastname"
            onChange={this.updateLastnameField}
          />{" "}
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
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </form>
      </div>
    );
  }
}
export default SignUp;