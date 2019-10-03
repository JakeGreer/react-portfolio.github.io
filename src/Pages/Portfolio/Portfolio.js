import React, { Component } from 'react';
import { Col, Row} from "../../Components/Grid";
import Modal from "../../Components/Modal";
import Tabs from "../../Components/Tabs";
import LibraryLogo from "../../Uploads/LibraryLogo_meta.png";
import TTCLogo from "../../Uploads/ttc-seal.jpg";
import RedivoLogo from "../../Uploads/redivo-logo.png";
import YellowLogo from "../../Uploads/yellow-logo.png";
import LACountyLogo from "../../Uploads/Seal_of_Los_Angeles_County.png";
import MeetupLogo from "../../Uploads/meetup_logo.png";
import HangmanLogo from "../../Uploads/rockOn.jpg";
import NYTimesLogo from "../../Uploads/nytimeslogo.png";
import TriviaLogo from "../../Uploads/Trivia-Challenge.jpg";
import "./Portfolio.css"

class Portfolio extends Component {

    render() {

        const Links = [
            {
                name: "Websites",
                path: "#",
                tab: 0
            },
            {
                name: "Apps",
                path: "#",
                tab: 1
            },
            {
                name: "For Fun",
                path: "#",
                tab: 2
            }
        ]
        const TabContent = [
            [
                {
                    src: LibraryLogo,
                    alt:"Los Angeles County Public Library",
                    title: "Los Angeles County Public Library",
                    size: "md-4",
                    languages: ["MySQL", "PHP", "Vanilla JS", "React"],
                    details: <div className="library-details">
                                <p>The Public Library website was a complete site migration from their outdated site.  I worked on the database architecture and implentation of the data to the front end for all 84 of the individual libraries.</p>
                                <p>I built a backend dashboard for L.A. County official librarians to properly and securely manage the data. I also setup a new book list system for their librarians to build out book lists to display on the site.</p>
                                <p><strong>Link: </strong><a href="https://lacountylibrary.org/" target="_blank" rel="noopener noreferrer">https://lacountylibrary.org/</a></p>
                                <p><strong>Code: </strong><i>Private</i></p>
                            </div>
                },
                {
                    src: TTCLogo,
                    alt: "Los Angeles County Treasurer and Tax Collector",
                    title: "Los Angeles County Treasurer and Tax Collector",
                    size: "md-4",
                    languages: ["PHP", "React"],
                    details: <div className="ttc-details">
                                <p>The LA County Treasurer and Tax Collector was another full site migration we handled at my current company. This site was filled with outdated information and applications and needed a complete makover.</p>
                                <p>I was tasked with rebuilding their core 15 form applications that make up this site. These forms range from applying for new business licenses, searching for business licenses, property tax applications, and many request for information forms.</p>
                                <p><strong>Link: </strong><a href="https://ttc.lacounty.gov/" target="_blank" rel="noopener noreferrer">https://ttc.lacounty.gov/</a></p>
                                <p><strong>Code: </strong><i>Private</i></p>
                            </div>
                },
                {
                    src: RedivoLogo,
                    alt: "The Redivo Group",
                    title: "The Redivo Group",
                    size: "md-4",
                    languages: ["Mongoose", "Express", "React", "Node"],
                    details: <div>
                                <p>The Redivo Group was a Freelance project I created for some friends of mine. The are a family owned Realtor Group that wanted to create a website to allow their clients to easily search properties on thier own</p>
                                <p>I connected the application to the simplyrets api and handled the front end integration of the data. I worked on the property details page and collaborated on the propert search page.</p>
                                <p><strong>Link: </strong><a href="https://redivo-test-server.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://redivo-test-server.herokuapp.com/</a></p>
                                <p><strong>Code: </strong><a href="https://github.com/JakeGreer/The-Redivo-Group-React" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/The-Redivo-Group-React</a></p>
                            </div>
                },
                {
                    src: YellowLogo,
                    alt: "The Yellow Store",
                    title: "The Yellow Store",
                    size: "md-4",
                    languages: ["Mongoose", "Sequelize", "Handlebars", "Node"],
                    details: <div className="yellow-store-details">
                                <p>I am especially proud of this project because this was one of my first projects I worked on when training to become a Full Stack Developer. This was an e-commerce based project designed to replicate a mix between Amazon and Etsy. The Idea was to let users create their own "shops" filled with all their uploaded goods.</p>
                                <p>I worked hard to establish user authentication for the app. While alse designing and developing the user stores.</p>
                                <p><strong>Link:</strong> <a href="https://stormy-wave-49060.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://stormy-wave-49060.herokuapp.com/</a></p>
                                <p><strong>Code:</strong> <a href="https://github.com/JakeGreer/Yellow-Store" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/yellowteam</a></p>
                            </div>
                }
                
            ],
            [
                {
                    src: MeetupLogo,
                    alt:"Whatsgood",
                    title: "Whatsgood",
                    size: "md-4 offset-md-2",
                    languages: ["Javascript", "Firebase"],
                    details: <div className="wg-details">
                                <p>Whatsgood was a fun, simple little project that I worked on to understand more about API's while also teaching myself Google Firebase</p>
                                <p>This application works alot like yelp, allowing you to find nearby points of interest such as food, gas, stores, etc. We also incoorporated the Meetup API to allow users to find local community events going on in their area.</p>
                                <p>I worked on Firebase authentication and incoorporating both API's into the google map.</p>
                                <p><strong>Link: </strong><a href="https://coreyro.github.io/whatsgood/" target="_blank" rel="noopener noreferrer">https://coreyro.github.io/whatsgood/</a></p>
                                <p><strong>Code: </strong><a href="https://github.com/JakeGreer/Whatsgood" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/Whatsgood</a></p>
                            </div>
                },
                {
                    src: LACountyLogo,
                    alt: "BOS Digital Directory",
                    title: "B.O.S Digital Directory",
                    size: "md-4",
                    languages: ["MySQL", "PHP", "Javascript"],
                    details: <div className="dd-details">
                                <p>This was definitely one of the most challenging projects I have ever worked on, and definitely my most proud. The Board of Supervisors for Los Angeles County tasked us with creating a digital directory for their 8 story building. I had to come up with a way to create an indoor wayfinding solution when I had never done so before. Seeing the final result was so rewarding and more succesful than I ever could have imagined.</p>
                                <p>I developed the entire wayfinding solution from front end to back end while providing my co workers with correct code guidelines to integrate the rest of the directory into the wayfinding map</p>
                                <p>Currently this project is not able to be linked out because it is secured by the Los Angeles County network. It only exist on our dev sites within their network and as a directory inside the actual building.</p>
                                <p><strong>Link: </strong> Not Available (Pictures Soon)</p>
                                <p><strong>Code: </strong> <i>Private</i></p>
                            </div>
                }
            ],
            [
                {
                    src:NYTimesLogo,
                    alt:"Newsscraper",
                    title: "NY Times Newsscraper",
                    size: "md-4",
                    languages: ["Node", "Javascript", "Mongoose"],
                    details: <div className="dd-details">
                                <p>The New York Times Newsscraper was a project I created to teach myself how to scrape websites. This application scrapes the New York Times news sites and pulls articles related to the search term given. You can then save the articles in a database to view later on.</p>
                                <p><strong>Link: </strong><a href="https://immense-anchorage-85078.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://immense-anchorage-85078.herokuapp.com/</a></p>
                                <p><strong>Code: </strong><a href="https://github.com/JakeGreer/nytreact" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/nytreact</a></p>
                            </div>
                },
                {
                    src: HangmanLogo,
                    alt: "Hangman",
                    title: "Hangman",
                    size: "md-4",
                    languages: ["Javascript"],
                    details: <div className="dd-details">
                                <p>This is a Rock and Roll Hangman game I created for fun. The terms are the name of bands and upon correctly guessing the band a snippet of their music will play!</p>
                                <p><strong>Link: </strong><a href="https://jakegreer.github.io/hangman-game/" target="_blank" rel="noopener noreferrer">https://jakegreer.github.io/hangman-game/</a></p>
                                <p><strong>Code: </strong><a href="https://github.com/JakeGreer/hangman-game" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/hangman-game</a></p>
                            </div>
                },
                {
                    src: TriviaLogo,
                    alt: "Trivia",
                    title: "Trivia",
                    size: "md-4",
                    languages: ["Javascript"],
                    details: <div className="dd-details">
                                <p>Trivia was a simple little trivia game I created to practice timer events in Javascript.</p>
                                <p><strong>Link: </strong><a href="https://jakegreer.github.io/trivia-game/" target="_blank" rel="noopener noreferrer">https://jakegreer.github.io/trivia-game/</a></p>
                                <p><strong>Code: </strong><a href="https://github.com/JakeGreer/trivia-game" target="_blank" rel="noopener noreferrer">https://github.com/JakeGreer/trivia-game</a></p>
                            </div>
                },
            ]
        ]

        return (
            <div id="portfolioPage">
                <Row>
                    <Col size="md-12" classname="text-center">
                        <h1 className="page-title">Portfolio</h1>
                    </Col>
                </Row>
                <Tabs
                    Links={Links}
                    TabContent={TabContent}
                />
                {
                    TabContent.map( content => 
                        content.map( (item, index) => 
                            <Modal key={index} item={item} />
                        )
                    )
                }
            </div>
        )
    }

}

export default Portfolio;