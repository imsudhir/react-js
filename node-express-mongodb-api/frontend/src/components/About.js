import React, { Component } from 'react';
import {
    container, 
    Table, 
    Card,
    CardBody, 
    CardText,
    CardTitle,
    CardImg,
    Button,
    Row, 
    Col
    } from 'reactstrap';
 
 

const About = () =>{

    return(
        <React.Fragment>
          
        <Col lg="3"></Col>
        <Col>
          <Card className="jd_element_">
          <CardImg top style ={{borderRadius:"100%"}} src="https://cgx3j41r03fwkmmdtoy3l6aq-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/linkedin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle><b><h2>Sudhir Singh</h2></b></CardTitle>
              <CardText>
                     <b><h3>Web Developer</h3></b>    
                    <h4>New Delhi</h4>    
              </CardText>
             </CardBody>
            </Card>
            </Col>
            <Col lg="3"></Col>

          
         
        </React.Fragment>
    )
}

export default About