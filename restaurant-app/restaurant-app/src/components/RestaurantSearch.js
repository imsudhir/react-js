import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faDelet, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
  } from "react-router-dom";
   import {handleDelete} from './RestaurantList.js'; 

class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchedData:null,
            dataFound: true
        }
    }
    dataSearch = (searchValue) =>{
        // console.log(searchValue)
        fetch("http://localhost:3000/restaurant?q="+searchValue)
        .then((res) => res.json()
        .then((result) => {
            if(searchValue){  
             result.length > 0 ? 
             this.setState({
                    searchedData:result,
                    searchValue:searchValue,
                    dataFound: true

             })
             : 
            this.setState({
                searchedData:result,
                dataFound: false
                     })
            } else {
                this.setState({
                    searchedData:null,
                    dataFound: true
                         })
            }
        })
        )}
        handleDelete = (id) =>{
            fetch("http://localhost:3000/restaurant/"+id,
            {
                method : "DELETE",
            })
            .then((result) => {result.json().then((res)=>{
                console.log(res);
            alert("Rrestaurant deleted Successfully")
            this.dataSearch(this.state.searchValue);
    
            })
         })
    
        }
    

render() {
    return (
        <React.Fragment>
            {/* {console.log(this.state.searchedData)} */}
            <div className="text-center mb-3">
            <h1> Restaurant search</h1>
                <input type="text" onChange={(e) => this.dataSearch(e.target.value)} />
            </div>
            {this.state.searchedData ?
           <Table striped>
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
                {this.state.searchedData.map((items) => 
                    <tr>
                        <td>{items.id} </td>
                        <td>{items.name} </td>
                        <td>{items.email} </td>
                        <td>{items.rating} </td>
                        <td>{items.address} </td>
                        <td>
                        <NavLink tag={Link} to={"/update/"+items.id} >
                        <FontAwesomeIcon className="ml-3" color="green" cursor="pointer" icon = {faEdit}/></NavLink>
                        <span onClick={(e)=>{this.handleDelete(items.id)}} > 
                        <FontAwesomeIcon className="ml-3" color="red" cursor="pointer" icon = {faTrash}/>
                        </span>
                        </td>
                    </tr>
                )}
                </tbody>
           </Table>
             :''
            } 
            {this.state.dataFound ? null :<div className="text-center">Data not found !!</div>}
            {console.log(this.state.dataFound)}
        </React.Fragment>
    );
}
}

export default RestaurantSearch;