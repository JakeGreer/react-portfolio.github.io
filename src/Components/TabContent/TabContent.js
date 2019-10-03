import React from "react";
import { Row, Col} from "../Grid";
import PortfolioCard from "../PortfolioCard";
import "./TabContent.css";

export const TabContent = ({content, index, currentTab}) => 

    <Row id={"tab-" + index} classname={index === currentTab ? "active-tab" : "d-none"}>
        <Col size="md-12">
            <Row>
                {content.map( (item, i) => 
                    <Col key={i} size={item.size} classname={"fadeIn fadeIn-" + i}>
                        <PortfolioCard 
                            src={item.src} 
                            alt={item.alt}
                            summary={item.details}
                            title={item.title}
                            index={i}
                            item={index + "-" + i}
                            languages={item.languages}
                        />
                    </Col>
                )}
            </Row>
        </Col>
    </Row>
            