import React, { Component } from 'react';
import PortfolioImage from "../PortfolioImage";
import { Row, Col } from "../Grid";
import "./PortfolioCard.css";

class PortfolioCard extends Component {
    render() {
        return (
            <Row>
                <Col size="md-12">
                    <Row classname="card-container">
                        <Col size="md-12" classname="no-padding-col">
                            <PortfolioImage 
                                src={this.props.src}
                                alt={this.props.alt}
                                fluid={true}
                                index={this.props.index}
                                item={this.props.item}
                                title={this.props.title}
                                languages={this.props.languages}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
      }

}

export default PortfolioCard;
