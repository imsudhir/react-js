import React from 'react';
import './App.css';
import {container, Table, Card, Row, Col} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavLink from "./components/NavLink"
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return ( 
    <div className="App container-fluid">
      <Router>
      <Row> <Col><NavLink /></Col></Row>
    <Row className="mt-4  ">
          <Col lg="1">
            </Col>
          <Col>
            <Route path="/list">
              <RestaurantList />
            </Route>
            </Col>
            <Col lg="1">
          </Col>
        </Row>
          <Route path="/create">
            <RestaurantCreate />
          </Route> 
           <Col>
          <Route path="/detail">
            <RestaurantDetail />
          </Route>
          </Col>
          <Row>
          <Col lg="1"></Col>
          <Col>
          <Route path="/search">
            <RestaurantSearch />
          </Route>
          </Col>
          <Col lg="1"></Col>
          </Row>
          <Row>
          <Col>
          <Route path="/update/:id" render={props =>(
            <RestaurantUpdate {...props}/>
          ) }>
          </Route>
          </Col>  
          </Row>
       </Router>
     </div>
  
  );
}

export default App;
