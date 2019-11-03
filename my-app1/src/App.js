import React, {Component} from "react";
import Student from "./Student";
import "./App.css"
import { directive } from "@babel/types";
let el1 = <h2>Hello Sudhir singh !!!</h2>;
//create component using class
class App1 extends Component{
    render(){   
        return <h3>hey ! how are you this is ?</h3>;
    }
}

//end create component using class

//create component using function
const App = () =>{
    return (
        <div>
            <Student name="Chandan" id="001" position="Designer"/>
            <Student name="Amitabh" id="002" position="Designer"/>
            <Student name="Abhishek" id="003" position="Designer"/>
            <Student name="Chandan" id="004" position="Developer"/>
            <Student name="Sudhir" id="005" position="Developer"/>
            <Student name="Akash" id="006" position="Developer"/>
        </div>
    )
}
//end create component using function
// export default App;
export default App; 