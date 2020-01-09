import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
class RestaurentCreate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            email:null,
            rating:null, 
            address:null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/restaurant",
        {
            method : "Post", 
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {result.json().then((res)=>{
        alert("Rrestaurant Added Successfully")

        })
    })
    console.log(this.state);
    }
    render() {
        return (
            <div>
             <h1> Restaurent create</h1>
    <Form  onSubmit = {this.handleSubmit}>
      <Row form>
        <Col lg="6">
        <FormGroup>
            <Label for="restaurantName">Name</Label>
            <Input type="text" name="email" onChange={(e)=> this.setState({name:e.target.value})} id="restEmail" placeholder="Reastaurant name" />
        </FormGroup>
          </Col>
        <Col lg="6">
        <FormGroup>
            <Label for="restaurantEmail">Email</Label>
            <Input type="email" name="email" 
            onChange={(e)=> this.setState({email:e.target.value})} placeholder ="Name" id="restEmail" placeholder="Email" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
      <Col>
      <FormGroup>
        <Label for="restaurantRating">Rating</Label>
        <Input type="number" name="rating" onChange={(e)=> this.setState({rating:e.target.value})} id="restrating" placeholder="Restaurant Rating"/>
      </FormGroup>
      </Col>
      <Col>
      <FormGroup>
        <Label for="restaurantAddress">Address</Label>
        <Input type="textarea" name="address" onChange={(e)=> this.setState({address:e.target.value})} id="restddress" placeholder="Restaurant Address"/>
      </FormGroup>
      </Col>
     </Row>
    <Button>Add</Button>
    </Form>
    </div>
        );
    } 
}

export default RestaurentCreate;