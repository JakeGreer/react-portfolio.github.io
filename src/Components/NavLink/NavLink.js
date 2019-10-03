import React, { Component } from 'react';

class NavLink extends Component {
    render(){
        return(
          <li className={(this.props.active ? "active nav-item" : "nav-item")}><a className="nav-link" href={this.props.linkTo}>{this.props.text}</a></li>
        );
    }
}

export default NavLink;
