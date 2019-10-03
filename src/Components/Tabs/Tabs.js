import React, { Component } from 'react';
import { Row } from "../Grid";
import TabButton from "../TabButton";
import "./Tabs.css";
import { TabContent } from '../TabContent/TabContent';
//import PortfolioImage from '../PortfolioImage';

class Tabs extends Component { 

    constructor(props) {
        super(props)
        this.state = {
            currentTab: ((this.props.currentTab !== undefined) ? this.props.currentTab : 0 )
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(i, event) {
        event.preventDefault();
        this.setState({
            currentTab: i
        });
    }
    
    render() {
        return (
            <div>
                <div id="portfolio-tabs">
                    <Row id="tab-links">
                    {
                        this.props.Links ?
                        this.props.Links.map( (link, index) => 
                            <TabButton key={index} length={this.props.Links.length} link={link} index={index} handleTabChange={this.handleTabChange} activeTab={this.state.currentTab}/>
                        )
                        : null
                    }
                    </Row>
                    <div className="content-container container">
                        {
                            this.props.TabContent ?
                            this.props.TabContent.map( (content, index) =>
                                <TabContent key={index} content={content} index={index} currentTab={this.state.currentTab} />
                            )
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;

