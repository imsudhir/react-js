import React from "react";
import ReactDom from "react-dom";
import App from "./App"

// let el = <h1>Hello Sudhir !!</h1>;
// let el =React.createElement("h1", null, "hello sudhir");

ReactDom.render(<App name="rahul"/>, document.getElementById("root"));
