import React, {Component} from "react";
import  Saleschart from "./Saleschart";
import  Member from "./Member";
import  Team from "./Team";
import "./Style.css"
import { directive } from "@babel/types";


//create component using function
const App = () =>{
    return (
        <div style={{display : "inline-block"}}>
             <Team />
          </div>
    )
}
//end create component using function
 export default App; 