import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
let patterns = {
  name:/^[a-z\d ]{5,20}$/i,
  email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  rating:/^[1-5]{1}$/,
  address: /^[a-zA-Z0-9 ]{5,100}$/
}
class RestaurentCreate extends Component {
      constructor(){
          super();
          this.state = {
              name:'',
              email:'',
              rating:'', 
              address:'',
              nameValid:false,
              emailValid:false,
              ratingValid:false, 
              addressValid:false
          }
      }
     
  handleName = (e) => {
      console.log(this.state);
       this.setState({
        name:e.target.value
      })
    if(patterns.name.test(this.state.name)){
      document.getElementById("nameerror").style.display="none";
      this.setState({
        nameValid:true
      })
    } else{
      this.setState({
        nameValid:false
      })
      console.log("plz enter correct name")
      document.getElementById("nameerror").style.display="block";
    }
}

handleEmail = (e) => {
   console.log(e.target.value);
   this.setState({
    email:e.target.value
  })
if(patterns.email.test(e.target.value)){
  document.getElementById("emailerror").style.display="none";
  this.setState({
    emailValid:true
  })
} else{
  console.log("plz enter correct email")
  this.setState({
    emailValid:false
  })
  document.getElementById("emailerror").style.display="block";
}
}
handleRating = (e) => {
   console.log(e.target.value);
   this.setState({
    rating:e.target.value
})
if(patterns.rating.test(e.target.value)){
  document.getElementById("ratingerror").style.display="none";
  this.setState({
        ratingValid:true
  })
} else{
  console.log("plz enter correct rating");
  this.setState({
    ratingValid:false
})
  document.getElementById("ratingerror").style.display="block";
}
}

handleAddress = (e) => {
   console.log(e.target.value);
   this.setState({
    address:e.target.value
})
if(patterns.address.test(e.target.value)){
  document.getElementById("addresserror").style.display="none";
  this.setState({
        addressValid:true
  })
} else{
  console.log("plz enter correct address")
   this.setState({
    addressValid:false
})
  document.getElementById("addresserror").style.display="block";
}
}
 
handleSubmit = (e) => {
 
      console.log(this.state);
        e.preventDefault();
        if(this.state.nameValid && this.state.emailValid && this.state.ratingValid && this.state.addressValid){
        fetch("http://localhost:3000/restaurant",
        {
            method : "Post", 
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {result.json().then((res)=>{
          alert("Restaurant Added Successfully")
          this.setState({
            name:'',
            email:'',
            rating:'', 
            address:'',
            nameValid:false,
            emailValid:false,
            ratingValid:false, 
            addressValid:false
        })
          
      // e.target.value=null
        })
    })
    console.log(this.state);
    
  }else{
      alert("Please Enter All required entry");

    }
  }
   
    render() {
        return (
            <div>
             <h1> Restaurent create</h1>
    <Form  onSubmit = {this.handleSubmit}>
      <Row form>
        <Col lg="6">
        <FormGroup>
            {/* <Label for="restaurantName">Name</Label> */}
            <Input type="text" name="name" onChange={this.handleName} id="name" required="true" value={this.state.name} placeholder="Reastaurant name" />
            <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span>
        </FormGroup>
          </Col>
        <Col lg="6">
        <FormGroup>
            {/* <Label for="restaurantEmail">Email</Label> */}
            <Input type="email" name="email"
            onChange={this.handleEmail} placeholder ="Name" id="restEmail" required="true" value={this.state.email} placeholder="Email" />
            <span id="emailerror" style={{color:"red", display:"none"}}>Enter correct Email</span>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
      <Col>
      <FormGroup>
        {/* <Label for="restaurantRating">Rating</Label> */}
        <Input type="number" name="rating" min="1" max="5" onChange={this.handleRating} id="restrating" required="true" value={this.state.rating} placeholder="Restaurant Rating"/>
        <span id="ratingerror" style={{color:"red", display:"none"}}>Enter correct Rating (1 to 5)</span>
        
      </FormGroup>
      </Col>
      <Col>
      <FormGroup>
        {/* <Label for="restaurantAddress">Address</Label> */}
        <Input type="textarea" name="address" onChange={this.handleAddress} id="restddress" required="true" value={this.state.address} placeholder="Restaurant Address"/>
        <span id="addresserror" style={{color:"red", display:"none"}}>Enter correct Address(Don't use special chars)</span>
      
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