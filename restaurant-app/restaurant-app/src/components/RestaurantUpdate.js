 import React, { Component } from 'react';
 import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
 
 class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            email:null,
            rating:null, 
            address:null
        }
    }
     componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id)
        .then((response) => { response.json()
        .then((result) => {
            console.log(result)
            this.setState({
                name:result.name,
                email:result.email,
                id:result.id,
                rating:result.rating,
                address:result.address
            })
        })
        })
     }
     handleUpdate = (e) =>{
         e.preventDefault();
        fetch("http://localhost:3000/restaurant/"+this.state.id,
        {
            method : "PUT",
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then((result) => {result.json().then((res)=>{
        alert("Rrestaurant updated Successfully")
        })
     })
    }
     render() {
         console.log(this.state)
         return (
             <div>
                <h1> Restaurent update</h1>
    <Form  onSubmit = {this.handleUpdate}>
      <Row form>
        <Col lg="6">
        <FormGroup>
            <Label for="restaurantName">Name</Label>
            <Input type="text" name="name" onChange={(e)=> this.setState({name:e.target.value})} id="restupName" value ={this.state.name} placeholder="Reastaurant name"  />
        </FormGroup>
          </Col>
        <Col lg="6">
        <FormGroup>
            <Label for="restaurantEmail">Email</Label>
            <Input type="email" name="email" 
            onChange={(e)=> this.setState({email:e.target.value})}  id="restEmail"  value ={this.state.email}placeholder="Email" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
      <Col>
      <FormGroup>
        <Label for="restaurantRating">Rating</Label>
        <Input type="number" name="rating" onChange={(e)=> this.setState({rating:e.target.value})} id="restrating" value ={this.state.rating} placeholder="Restaurant Rating"/>
      </FormGroup>
      </Col>
      <Col>
      <FormGroup>
        <Label for="restaurantAddress">Address</Label>
        <Input type="textarea" name="address" onChange={(e)=> this.setState({address:e.target.value})} id="restddress" value ={this.state.address} placeholder="Restaurant Address"/>
      </FormGroup>
      </Col>
     </Row>
    <Button>Add</Button>
    </Form>
             </div>
         );
     }
 }
 
 export default RestaurantUpdate;