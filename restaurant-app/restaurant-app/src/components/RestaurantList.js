import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount(){
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
    render() {
        return (
           <React.Fragment>
            <h2 className="text-center pb-2 ml-5 mr-5 pt-1 headings"> Restaurant list</h2>
            <Table dark>
                <thead>
                    <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Address</th>
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