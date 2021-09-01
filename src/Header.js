import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import About from "./About";
import Home from "./Home";
import GitHubUser from "./GitHubUser";

class Header extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:score" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
