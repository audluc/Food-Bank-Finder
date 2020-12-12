import React, { Component } from "react";
import axios from "axios";
import "./NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then((response) => {
        console.log(response.data);
        window.location.replace("/");
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null,
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Foodbank Finder
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Saved Locations
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Place #1
                </a>
                <a class="dropdown-item" href="#">
                  Place #2
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Place #3
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.logout}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
