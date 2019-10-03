import React, { Component } from "react";
import { Col } from "../Grid";
import { Button } from "../Button";
import "./TabButton.css";

class TabButton extends Component {
    render() {
        return (
            <Col size={`md-${12 / this.props.length}`} classname="text-center">
                <Button path={this.props.link.path ? this.props.link.path : "#"} handleTabChange={this.props.handleTabChange} classname={this.props.index === this.props.activeTab ? "active-link" : ""} index={this.props.index}>{this.props.link.name}</Button>
            </Col>
        )
    }
}

export default TabButton;