import React, { Component } from 'react';
window.id=1;
class AddTodoList extends Component {
    state = {
         content: ''
         
    }
    changeHandler = (e)=> {
        var newid = window.id++
        this.setState({
             id:newid,
             content: e.target.value
    })
    }
    submitHandler = (e) => {
        e.preventDefault();

         if(this.state.content!==''){
        this.props.AddTodo(this.state)
        }
        this.setState({
        content:''
        })
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>        
                 <label> Add New Todo:</label>
                <input type="text" onChange={this.changeHandler}  value={this.state.content}/>
                <button type="submit"> Add </button>
            </form>
        )
    }
}

export default AddTodoList;