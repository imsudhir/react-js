import React, {Component} from "react";
import {
  Card, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup, Button
} from 'reactstrap';
import  Saleschart from "./Saleschart";
import  Member from "./Member";
import  Team from "./Team";
import  SalesReportButton from "./SalesReportButton";
import  TableData from "./Table";
import  ChartData from "./ChartGraphs";
import  Header from "./Header";
import  Footer from "./Footer";
import  OffcavassideLink from "./OffcanvasNav"
import {BrowserRouter,Route} from 'react-router-dom';
import  NavigationLink from "./Navlink";
import { directive } from "@babel/types";
const Home = () =>{
  return (
    <h1>This is home page</h1>
  )
}
 
//create component using function 
const App = () =>{
    return (
        <React.Fragment>
        <Header />
         <BrowserRouter>
          <div className="App" id="App">
          <OffcavassideLink />
          {/* <Row className="mt-4"> */}
          <Route path="/" component={ChartData}/>  
          <ChartData />
          <Route path="/" component={SalesReportButton}/>  
          <Route path="/" component={Team}/>  
          {/* </Row> */}
          </div>
        </BrowserRouter>
        <Footer />
        </React.Fragment>
    ) 
}

//end create component using function
 export default App; 