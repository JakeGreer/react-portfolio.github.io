import React, { Component } from 'react';
import { Row, Col } from "../Grid";
import "./PortfolioImage.css";

class PortfolioImage extends Component {

  render() {
    return (
      <Row>
        <Col size="md-12">
          <div className={this.props.fluid ? "img-fluid portfolio-image" : "portfolio-image"} style={{backgroundImage: `url(${this.props.src})`, backgroundColor: `${this.props.index % 2 === 0 ? "#fff" : "#000" }` }} alt={this.props.alt} />
          <div className="image-overlay-container">
            <div className="image-overlay text-center">
              <h4 className="details-title text-center">STACK</h4>
              <hr/>
              <Row classname="language-container">
                {
                  this.props.languages.length > 0
                  ?
                  this.props.languages.map( (key, index) => {
                    return  (
                      <Col size="md-12" key={index}>
                        <span className="language-skill text-center">{key}</span>
                      </Col>
                      )
                  })
                  :
                  <div></div>
                }
              </Row>
              <button type="button" className="btn details-btn text-center" data-toggle="modal" data-target={`#modal-${this.props.title.toLowerCase().replace(/\s/g, "-")}`}>Details</button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }

}

export default PortfolioImage;
