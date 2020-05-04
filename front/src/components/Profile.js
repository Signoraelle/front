import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
  state = {
    profile: {
      email: "homer.simpson@wildcodeschool.it",
      name: "Homer",
      lastname: "Simpson",
    },
    signin: false,
  };

  componentDidMount() {
    if (this.props.token) {
      fetch("/auth/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error(res.statusText);
        })
        .then((res) => {
          this.setState({ profile: res });
        })
        .catch();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      signin: true,
    });
  };
  render() {
    if (this.state.signin === true) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary={this.state.profile.email} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={this.state.profile.name} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={this.state.profile.lastname} />
          </ListItem>
        </List>
        <Button
          className="button_form"
          variant="contained"
          color="primary"
          value="submit"
          onClick={this.handleSubmit}
        >
          Sign In
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps)(Profile);