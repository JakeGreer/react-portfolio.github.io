import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
    render(){
        return(
          <li className={(this.props.active ? "active nav-item" : "nav-item")}><Link className="nav-link" to={this.props.linkTo}>{this.props.text}</Link></li>
        );
    }
}

export default NavLink;
