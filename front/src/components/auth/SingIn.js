import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SingIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} action="/" method="POST" className="white">
          <h5 className="grey-text text-darken-3">Sing In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>

          <p className="new">New here?</p>
          <NavLink to="/signup">
            <p className="redirect-two">Register now!</p>
          </NavLink>
          <div className="profile">
            <NavLink to="/profile">
              <p>Go to your profile</p>
            </NavLink>
          </div>
        </form>
      </div>

    );
  }
};

export default SingIn