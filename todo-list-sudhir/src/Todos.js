import React from 'react';
// here pps can replace by {todos, deletTodo}
const Todos = (props) => {
    console.log(props.todos); 
 const todoList = props.todos.length ? (
    props.todos.map(todo => {
 return(
     <React.Fragment>
    {/* <h3>count :{props.todos.length}</h3>  */}
     <div className="collection-item" key={todo.id}>
        <span>{todo.content}</span>
    <button onClick={() => {props.deletTodo(todo.id)}} style={{float:"right"}} > Remove</button>
    </div>
    </React.Fragment>
 )
   })
 ) : (
    <div className="collection-item">
    <span> Wow !! No Todo's Left !!</span>
     </div>
 )
    return(
        <div className="todos collection">
         {todoList}
        </div>
    )
} 

export default Todos;