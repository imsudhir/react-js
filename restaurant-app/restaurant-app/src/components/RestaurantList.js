import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faDelet, faTrash } from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }

    handleListing = () => {
        fetch("http://localhost:3000/restaurant")
        .then((res) => res.json()
        .then((result) => {
            console.log(result)  
            this.setState(
                {
                list:result
                }
            )
        })
        )
    }
    componentDidMount(){
        this.handleListing();
    }

     handleDelete = (id) =>{
        fetch("http://localhost:3000/restaurant/"+id,
        {
            method : "DELETE",
        })
        .then((result) => {result.json().then((res)=>{
            console.log(res);
        alert("Rrestaurant deleted Successfully")
        this.handleListing();

        })
     })

    }

    render() {
        return (
           <React.Fragment>
            <h2 className="text-center pb-2 ml-5 mr-5 pt-1 headings"> Restaurant list</h2>
            <Table striped hover bordered>
                <thead>
                    <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Address</th>
                    <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    this.state.list ? (
                      this.state.list.map((lists) => 
                      {
                    return  (
                            <tr>
                            <th scope="row">{lists.id}</th>
                            <td>{lists.name}</td>
                            <td>{lists.email}</td>
                            <td>{lists.rating}</td>
                            <td>{lists.address}</td>
                            <td><NavLink tag={Link} to={"/update/"+lists.id} > <FontAwesomeIcon icon = {faEdit}/></NavLink> 
                             <span onClick={(e)=>{this.handleDelete(lists.id)}} > 
                             <FontAwesomeIcon className="ml-3" color="red" cursor="pointer" icon = {faTrash}/></span></td>
                            </tr>
                      )  
                      }))
                     :'Please wait...'
                }
                </tbody>
            </Table>
            </React.Fragment>
        ); 
    }
}

export default RestaurantList;