import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Team.css";
import {
    Card, Row, Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup, Button
  } from 'reactstrap';

import  Member from "./Member";
const Team = () =>{
    return(
      <React.Fragment>
      <Row className="mt-4">
      {/* <CardGroup> */}
          <Col>
          <Card className="jd_element_">
          <CardImg top width="100%" src="https://cgx3j41r03fwkmmdtoy3l6aq-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/linkedin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
              With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>Read More</Button>
            </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="jd_element_">
          <CardImg top width="100%" src="https://cgx3j41r03fwkmmdtoy3l6aq-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/linkedin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
              With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>Read More</Button>
            </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="jd_element_">
          <CardImg top width="100%" src="https://cgx3j41r03fwkmmdtoy3l6aq-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/linkedin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
              With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>Read More</Button>
            </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="jd_element_">
          <CardImg top width="100%" src="https://cgx3j41r03fwkmmdtoy3l6aq-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/linkedin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
              With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>Read More</Button>
            </CardBody>
            </Card>
          </Col>
        </Row>
        
</React.Fragment>
 );
  };
 
export default Team;