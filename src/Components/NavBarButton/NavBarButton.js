import React, { Component } from 'react';

class NavBarButton extends Component {
    render(){
        return(
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        );
    }
}

export default NavBarButton;