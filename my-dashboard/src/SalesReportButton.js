import React, { Component } from 'react';
import  Salesbutton from "./SalesReport";

class SalesReportButton extends Component {
    render(){
    return (
    <React.Fragment>
    <Salesbutton months={'November'}/>
    </React.Fragment>
        )
    }
}
export default SalesReportButton
