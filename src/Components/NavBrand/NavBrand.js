import React, { Component } from 'react';
import Brand from "../../Uploads/brandLogo.png";

class NavBrand extends Component {
    render(){
        return (
          <a className="navbar-brand" href={this.props.linkTo}><img src={Brand} className="img-fluid" id="brandLogo" alt="brand logo" /></a>
        ); 
    }

}

export default NavBrand;
