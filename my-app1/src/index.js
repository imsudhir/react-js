import React, {Component} from "react";
import ReactDom from "react-dom";
import App from "./App"
import Navbar1 from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
const { FaIcon, FaStack } = require('react-fa-icon');

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// let el = <h1>Hello Sudhir !!</h1>; 
// let el =React.createElement("h1", null, "hello sudhir");
 

ReactDom.render(<Navbar1 />, document.getElementById("root"));
