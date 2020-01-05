import React, { Component } from 'react';

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
            <div>
                <h1> Restaurant list</h1>
                {
                    this.state.list ? (
                      this.state.list.map((lists) => 
                      {
                    return  (<div>
                        <h3>Name:  {lists.name} </h3><h5>email: {lists.email}</h5>
                         </div>)
                      })  
                    ) :'Please wait...'
                }
                
            </div>
        ); 
    }
}

export default RestaurantList;