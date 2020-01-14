import React, { Component } from 'react';
import {container, Table, Card, Row, Col} from 'reactstrap';
 
 

const Footer = () =>{

    return(
        <React.Fragment>
        <Col xs="6" sm="4">Facebook</Col>
        <Col xs="6" sm="4">Twitter</Col>
        <Col sm="4">Github</Col>
        </React.Fragment>
    )
}

export default Footer