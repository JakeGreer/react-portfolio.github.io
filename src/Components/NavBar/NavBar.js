import React, { Component } from 'react';
import NavBrand from "../NavBrand";
import NavMenu from "../NavMenu";
import NavBarButton from "../NavBarButton";
import { Container } from "../Grid/Container";
import "./NavBar.css"

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Container>
          <div className="navbar-header">
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
          </div>
          <NavBarButton />
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <NavMenu links={this.props.links} />
          </div>
        </Container>
      </nav>
    )
  }
}

export default NavBar;
