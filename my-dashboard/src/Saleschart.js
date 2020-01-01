import React from "react";
import { Button } from 'reactstrap';
const Saleschart = (props) =>{
    return (
  <React.Fragment>
       <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button> 
  </React.Fragment>
    )
}
export default Saleschart;