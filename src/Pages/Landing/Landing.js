import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import "./Landing.css";
//import { Col, Row, Container } from "../../Components/Grid";
//import BackgroundGraphic from "../../Uploads/Rainbow_Nebula_4K_Motion_Background.mp4";
//import BackgroundGraphic2 from "../../Uploads/FallingStars5Videvo.mov";

class Landing extends Component {

    constructor(props ) {
        var count;
        (window.matchMedia('screen and (max-width: 500px)').matches ? count = 10 : count = 30)
        super(props);
        this.state = {
            particleCount: count
        }
    }

    handleHoverIn(event) {
        event.currentTarget.childNodes[1].classList.remove("rotateUp");
        event.currentTarget.childNodes[1].classList.add("rotateDown");
    }

    handleHoverOut(event) {
        event.currentTarget.childNodes[1].classList.remove("rotateDown");
        event.currentTarget.childNodes[1].classList.add("rotateUp");
    }

    render() {
        return (
            <div id="landingPage">
                 <Particles 
                    params={{
                            particles: {
                                number:{
                                    value: this.state.particleCount,
                                    density:{
                                        enable: false,
                                        value_area: 0
                                    }
                                },
                                color: {
                                    value:"#ffffff"
                                },
                                shape: {
                                    type: 'circle',
                                    stroke: { 
                                        width: 1,
                                        color: "#fff"
                                    },
                                    image: {
                                        src: "#",
                                        width: 400,
                                        height: 400
                                    }
                                },
                                opacity: {
                                    value: 0.9,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 1.0557003759917487,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 3.008530152163807,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        size_min: 2.1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 356.5,
                                    color: "#ffffff",
                                    opacity: 0.9,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 6.206824121731046,
                                    direction: "none",
                                    random: false,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode:"grab"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode:"push"
                                    },
                                    resize: true
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 20,
                                        duration: 2,
                                        opacity:8,
                                        speed: 3
                                    },
                                    repulse: {
                                        distance: 125,
                                        duration: 0.4
                                    },
                                    push: {
                                        particles_nb: 4
                                    },
                                    remove: { 
                                        particles_nb: 2
                                    }
                                }
                            },
                            retina_detect: true
                        }}
                    />
                <div className="display-name mx-auto text-center">
                    <p className="text-center">Hello, I'm <span className="landing-name">Jake Greer</span></p>
                    <p className="text-center">I'm a Full Stack Web Developer</p>
                    <Link id="landing-button" to={"/about"} className="btn btn-lg text-center" onMouseOver={this.handleHoverIn.bind(this)} onMouseLeave={this.handleHoverOut.bind(this)}>View My Work <i className="fas fa-arrow-right"></i></Link>
                </div>
                
            </div>
        )
    }

}

export default Landing;