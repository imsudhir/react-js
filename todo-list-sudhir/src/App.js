import React, { Component } from 'react';
import Todos from "./Todos"
import AddTodoList from "./AddTodoList"
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id:0, content: 'todo-1'},
        {id:1, content: 'todo-2'}
      ]
    } 
   }
  AddTodoList = (todo)=> {
           const todos = [...this.state.todos,todo]
  
    this.setState({
          todos: todos    
         });
}
  deletTodoList = (id) => {
   const todos = this.state.todos.filter(todo => {
     return todo.id !== id
   })
   this.setState({
     todos
   })
  }
  
  render(){
    return (
      <div className="App container">
         <h1 className="center blue-text">
           My Todo's List
         </h1>
         <Todos
         todos = {this.state.todos} 
         deletTodo={this.deletTodoList}/>
         <AddTodoList AddTodo={this.AddTodoList}/>
      </div>
    );
  }
}

export default App;