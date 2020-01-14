import React from 'react';
import './App.css';
import {container, Table, Card, Row, Col} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavigationLink from "./components/NavLinks"
import Footer from "./components/Footer"
import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  return ( 
    <div className="App container-fluid">
      <Router>
      <Row> <Col><NavigationLink /></Col></Row>
       <Row>
          <Route path="/">
            <About />
          </Route>
        </Row>
        <Row> 
           <Col>
          <Route path="/">
            <Skills />
          </Route>
          </Col>
          </Row>
          <Row>
          <Col lg="1"></Col>
          <Col>
          <Route path="/search">
            {/* <RestaurantSearch /> */}
          </Route>
          </Col>
          <Col lg="1"></Col>
          </Row>
          <Row>
            <Footer />
           </Row>
       </Router>
     </div>
  
  );
}

export default App;
