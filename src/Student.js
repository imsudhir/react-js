import React from "react";
const Student = (props) =>{
    return <div className="divbg" 
    style={{backgroundColor : "beige", margin : "10px", display : "inline-block", padding : "20px", align : "left", color: "black", height: "300px", width:"200px"}} >
    <h2 className="bg">Name : </h2> <h3>{props.name}</h3>
    <h2 className="bg">Id : </h2> <h3>{props.id}</h3>
    <h2 className="bg">Position : </h2> <h3>{props.position}</h3>
    </div>; 
}
export default Student;