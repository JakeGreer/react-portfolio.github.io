import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from "./Components/Grid/Container";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import PageShell from './Components/PageShell';
import NavBar from "./Components/NavBar";
import {FooterDesign} from "./Components/FooterDesign";
// import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import './App.css';


const Layout = ({ children }) => {
  // set data
    var navbar = {};
    navbar.brand = {linkTo: "/"};
    navbar.links = [
      {linkTo: "/about", text: "About"},
      {linkTo: "/portfolio", text: "Portfolio"},
      {linkTo: "/contact", text: "Contact"},
    ];
  return (
    <section>
      <NavBar {...navbar}/>
      <Container>
        {children}
      </Container>
      <FooterDesign />
  </section>
  )
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageShell(Landing)}/>
        <Layout>
          {/* <Route exact path="/:route" component={NavBar(navbar)} /> */}
          <Route exact path="/about" component={PageShell(About)}/>
          <Route exact path="/portfolio" component={PageShell(Portfolio)}/>
          <Route exact path="/contact" component={PageShell(Contact)}/>
        </Layout>
      </Switch>
    );
  }
}

export default App;

