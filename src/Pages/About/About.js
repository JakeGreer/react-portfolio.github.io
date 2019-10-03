import React, { Component } from 'react';
import PortfolioPic from "../../Uploads/headpic2.jpg";
import { Col, Row } from "../../Components/Grid";
import "./About.css"

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            percentages: [85, 90, 75, 60, 90, 85, 95, 50, 50 ],
            progress: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        for(let i =0; i < this.state.progress.length; i++) {
            this.move(i)
        }   
    }

    move(i) {
        var elem = document.getElementById("bar" + i);   
        var width = 0;
        var control = this;
        var id = setInterval(frame, 30);
        function frame() {
          if (width >= control.state.percentages[i]) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.nextSibling.innerHTML = width * 1  + '%';
          }
        }
      }

    increase(i) {
        var control = this;
        var progress = this.state.progress[i] + 1;
        if (progress >= this.state.percentages[i]) {
            clearTimeout(this.tm);
            return true;
        }
        var newProgress = [...this.state.progress]
        newProgress[i] = progress;
        this.setState({
            progress: newProgress
        });
        this.tm = setTimeout(function() {
            control.increase(i)
        }, 30);
    }


    render() {
        return (
            <div id="aboutPage">
                <Row>
                    <Col size="md-12" classname="text-center">
                        <h1 className="page-title">About</h1>
                    </Col>
                </Row>
                <Row id="diamond-container">
                    <Col size="lg-3 md-6">
                        <Row>
                            <Col size="md-12" classname="diamond-wrapper1">
                                <div className="diamond diamond-1">
                                    <div className="diamond-text text-center">
                                        <span className="diamond-icons"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></span>
                                        <h3 className="diamond-header">Responsive</h3>
                                        <p>Projects built to fit on any screen size, big or small.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="lg-3 md-6">
                        <Row>
                            <Col size="md-12" classname="diamond-wrapper2">
                                <div className="diamond diamond-2">
                                    <div className="diamond-text text-center">
                                        <span className="diamond-icons"><i className="fa fa-rocket fa-lg" aria-hidden="true"></i></span>
                                        <h3 className="diamond-header">Optimized</h3>
                                        <p>Site speed and efficiency is one of my main priorities.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="lg-3 md-6">
                        <Row>
                            <Col size="md-12" classname="diamond-wrapper3">
                                <div className="diamond diamond-3">
                                    <div className="diamond-text text-center">
                                        <span className="diamond-icons"><i className="fa fa-paint-brush fa-lg" aria-hidden="true"></i></span>
                                        <h3 className="diamond-header">Creative</h3>
                                        <p>Always pushing to improve creativity and UI designs</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="lg-3 md-6">
                        <Row>
                            <Col size="md-12" classname="diamond-wrapper4">
                                <div className="diamond diamond-4">
                                    <div className="diamond-text text-center">
                                        <span className="diamond-icons"><i className="fa fa-database fa-lg" aria-hidden="true"></i></span>
                                        <h3 className="diamond-header">Dynamic</h3>
                                        <p>Sites that feel alive, displaying new content constantly</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h2 className="sub-header text-center">Who Am I?</h2>
                            </Col>
                            <Col size="md-12">
                            <img id="portfolioPic" className="img-fluid" src={PortfolioPic} alt="Jake Greer" />
                                <p className="about-me">
                                    &nbsp;&nbsp;&nbsp;&nbsp;I am a full stack web developer for Red Dot Technology Solutions. At R.D. Technology, we provide software solutions with a successful and experienced team tailored to the needs of our customer requirements.
                                </p>
                                <p className="about-me">
                                    &nbsp;&nbsp;&nbsp;&nbsp;I am a softare enthusiast, I love discovering new technologies and exploring unfamiliar areas of my own knowledge to grow as a software engineer. My favorite front end language is React.js and for the back end I prefer Node.js but my curiosities are expanding and I am begining to explore technologies such as Vue, PHP, and Angular.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6" classname="mx-auto skills">
                        <Row>
                            <Col size="md-12">
                                <h2 className="sub-header text-center">Skills</h2>
                            </Col>
                            <Col size="md-12" classname="skillbar-container">
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>React.js</span></div>
                                            <div id="bar0" className="bar-container" style={{backgroundColor: "#02afbf", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>Javascript</span></div>
                                            <div id="bar1" className="bar-container" style={{backgroundColor: "#007684", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>Node.js</span></div>
                                            <div id="bar2" className="bar-container" style={{backgroundColor: "#02afbf", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>PHP</span></div>
                                            <div id="bar3" className="bar-container" style={{backgroundColor: "#007684", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>mySQL</span></div>
                                            <div id="bar4" className="bar-container" style={{backgroundColor: "#02afbf", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>CSS</span></div>
                                            <div id="bar5" className="bar-container" style={{backgroundColor: "#007684", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>HTML</span></div>
                                            <div id="bar6" className="bar-container" style={{backgroundColor: "#02afbf", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>Photoshop</span></div>
                                            <div id="bar7" className="bar-container" style={{backgroundColor: "#007684", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row classname="skillbar">
                                    <Col size="md-12">
                                        <div className="bar-bg">
                                            <div className="barText" ><span>Illustrator</span></div>
                                            <div id="bar8" className="bar-container" style={{backgroundColor: "#02afbf", width: '0'}}></div>
                                            <div className="bar-percent"><span>0%</span></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default About;