import React, { Component } from 'react';
import { Col, Row } from "../../Components/Grid";
import GithubIcon from "../../Uploads/githubIcon.png";
import LinkedinIcon from "../../Uploads/linkedinIcon.png";
import StackOverflowIcon from "../../Uploads/stackoverflowIcon.png";
import "./Contact.css"

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: ((this.props.firstName !== undefined) ? this.props.firstName : ""),
            lastName: ((this.props.lastName !== undefined) ? this.props.lastName : ""),
            emailAddress: ((this.props.emailAddress !== undefined) ? this.props.emailAddress : ""),
            message: ((this.props.message !== undefined) ? this.props.message : "")
        }
    }

    handleInputChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleMouseEnter(event) {
        event.target.classList.add('icon-hover');
    }

    handleMouseLeave(event) {
        event.target.classList.remove('icon-hover');
    }

    render() {
        return (
            <div id="contactPage">
                <Row>
                    <Col size="md-12" classname="text-center">
                        <h1 className="page-title">Contact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8" classname="offset-md-2">
                        <form id="contact-form" action="mailto:jakegreer11@gmail.com">
                            <Row>
                                <Col size="md-12" classname="form-group">
                                    <input type="text" className="form-control" placeholder="First Name" maxLength="35" name="firstName" onChange={this.handleInputChange.bind(this)} value={this.state.firstName} />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12" classname="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" maxLength="35" name="lastName" onChange={this.handleInputChange.bind(this)} value={this.state.lastName}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12" classname="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" maxLength="50" name="emailAddress" onChange={this.handleInputChange.bind(this)} value={this.state.emailAddress} />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12" classname="form-group">
                                    <textarea className="form-control" placeholder="Message" rows="6" name="message" onChange={this.handleInputChange.bind(this)} value={this.state.message} />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12" classname="form-group text-center">
                                    <input type="submit" id="form-submit" className="btn" value="Send" />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" classname="text-center">
                        <h2 className="page-title">Connect With Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" classname="text-center">
                        <a target="_blank" rel="noopener noreferrer" className="socialIcons" href="https://github.com/JakeGreer" aria-label="Github account link"><img className="img-fluid" src={GithubIcon} alt="Github" /></a>
                        <a target="_blank" rel="noopener noreferrer" className="socialIcons" href="https://www.linkedin.com/in/jakegreer11/" aria-label="Linkedin account link"><img className="img-fluid" src={LinkedinIcon} alt="Linkedin" /></a>
                        <a target="_blank" rel="noopener noreferrer" className="socialIcons" href="https://stackoverflow.com/users/7034333/jake-g" aria-label="Stack Overflow account link"><img className="img-fluid" src={StackOverflowIcon} alt="Stack Overflow" /></a>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Contact;