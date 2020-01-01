import React, { Component } from 'react';
import {Popover, PopoverHeader, PopoverBody, Card, CardBody, Button, ButtonGroup, Table, Row, Col, label, Fragement} from 'reactstrap';
import { constructor } from '@babel/types';
class Salesbutton extends Component {
    constructor(props){
     super(props);
     this.state = {
        month: this.props.months
    };
    }
    handleClick = (months) =>{
    this.setState({month: months});
    console.log(this.state.month)
    }
    handleClickNovArg = (months) =>{
      this.handleClick('November');
     }
    handleClickDecArg = (months) =>{
      this.handleClick('December');
     }
    handleClickJanArg = (months) =>{
      this.handleClick('January');
     }     
   render(){
    return(
      <React.Fragment>
      <Row className="">
       <Col>
       <Card className="mt-4">
      <CardBody>
        <ButtonGroup >
        <Button onClick={this.handleClickNovArg} color="primary">November</Button>
        <Button onClick={this.handleClickDecArg} color="primary" >December</Button>
        <Button onClick={this.handleClickJanArg} color="primary">January</Button>
        </ButtonGroup>
        {this.state.month == 'November' 
      ? '' : this.state.month == 'December' ? '':this.state.month == 'January' ? 
      <Table dark className="mt-3">
    <thead>
    <tr><th></th><th></th><th> {this.state.month} Report</th> </tr>
     <tr>
       <th>#</th>
       <th>First Name (November)</th>
       <th>Last Name (November)</th>
       <th>Username (November)</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
     <tr>
       <th scope="row">2</th>
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
     </tr>
     <tr>
       <th scope="row">3</th>
       <td>Larry</td>
       <td>the Bird</td>
       <td>@twitter</td>
     </tr>
   </tbody>
 </Table>
      : null }
      </CardBody>
      </Card>
       </Col>
   </Row>
  </React.Fragment>
     )
  }
 }

 export default Salesbutton