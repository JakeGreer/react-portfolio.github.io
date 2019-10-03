import React, { Component } from 'react';
import NavLink from "../NavLink";

class NavMenu extends Component {
    render() {
        var links = this.props.links.map( (key, i) => {
            return (
                <NavLink key={i} linkTo={key.linkTo} text={key.text} active={key.active} />
            );
        });
        return (
          <ul className="navbar-nav">
            {links}
          </ul>
        );
      }

}

export default NavMenu;
