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
      <NavLink />  
    <Row>
        <Col>
          <Route path="/list">
            <RestaurantList />
          </Route>
          </Col>
          <Col>
          <Route path="/list">
            <RestaurantList />
          </Route>
          </Col>
          <Col>
          <Route path="/list">
            <RestaurantList />
          </Route>
          </Col><Col>
          <Route path="/list">
            <RestaurantList />
          </Route>
          </Col>
          </Row>
          <Row>
          <Col>
          <Route path="/create">
            <RestaurantCreate />
          </Route> 
          </Col>
          <Col>
          <Route path="/detail">
            <RestaurantDetail />
          </Route>
          </Col>
          <Col>
          <Route path="/search">
            <RestaurantSearch />
          </Route>
          </Col>
          <Col>
          <Route path="/update">
            <RestaurantUpdate />
          </Route>
          </Col>  
          </Row>
       </Router>
     </div>
  
  );
}

export default App;
