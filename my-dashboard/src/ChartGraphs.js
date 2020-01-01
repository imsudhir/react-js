import React, { Component } from 'react';
import { NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu, 
  Collapse,
  DropdownItem, Table, Button, ButtonGroup, Card, CardBody, Row, Col, } from 'reactstrap';
  import  Salesbutton from "./SalesReport";
// import 'antd/dist/antd.css';
// import { Column } from '@antv/g2plot';
// import { Column } from 'antd';
 import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';
import { thisExpression } from '@babel/types';
class ChartData extends Component{
  constructor(props){
    super(props);
    this.state = {
      ChartType:this.props.ChartType,
      Month:this.props.Month,
      chartData:{
        labels: ['Boston', 'Worcester','Springfield', 'Lowel', 'Lecester'],
        datasets:[
          { 
            label:'Total Sales',
            data:[
              25594,
              15045,
              30060, 
              18519,
              15519
            ],
            backgroundColor:[
              'rgba(25, 129, 2, 0.9)',
              'rgba(25, 29, 12, 0.9)',
              'rgba(155, 89, 1, 1)',
              'rgba(155, 189, 201, 1)',
              'rgba(15, 129, 12, 1)'
            ]
          }
        ]
      }
    }
   }

   handleClick = (ChartTypes) =>{
    this.setState({ChartType: ChartTypes});
    console.log(this.state.ChartType, this)
    }
    handleClickBarArg = (ChartTypes) =>{
      this.handleClick(Bar);
     }
     handleClickLineArg = (ChartTypes) =>{
      this.handleClick(Line);
     } 
     handleClickPieArg = (ChartTypes) =>{
      this.handleClick(Pie);
     }  
      handleClickDoughnutArg = (ChartTypes) =>{
      this.handleClick(Doughnut);
     }     

     handleSelect = (months) =>{
      this.setState({Month: months});
      console.log(this.state.Month, this)
      alert("dfghjk");

      }
      handleClickJanArg = (months) =>{
        this.handleSelect('January');
       }
       handleClickFebArg = (months) =>{
        this.handleSelect('February');
        alert("dfghjk");
       }
       handleClickMarArg = (months) =>{
        this.handleSelect('March');
       }
       handleClicAprkArg = (months) =>{
        this.handleSelect('April');
       }     
   static defaultProps = {
     displayTitle:true,
     displayLegend:true,
     legendPosition:'top',
     titlePosition:'top'
   }
render(){
  return (
    <React.Fragment>
    <Card className="mt-4">
    <CardBody>
      {/* <Col style={{float:"right"}}> */}
    <ButtonGroup >
        <Button onClick={this.handleClickBarArg} color="primary">Bar</Button>
        <Button onClick={this.handleClickLineArg} color="primary">Line</Button>
        <Button onClick={this.handleClickPieArg} color="primary">Pie</Button>
        <Button onClick={this.handleClickDoughnutArg} color="primary">Doughnut</Button>
    <Button color="primary">
    <select id="sex" style={{background:"#007bff", border:"none", outline:"none"}}  data-reactid=".0.1">
        <option value="" color="primary" color="primary">Select Month</option>
        <option onSelect={this.handleClickJanArg} value="January" color="primary">January</option>
        <option onClick={this.handleClickFebArg} value="Febuary" color="primary">Febuary</option>
        <option onSelect={this.handleClickMarArg} value="March" color="primary">March</option>
        <option onSelect={this.handleClicAprkArg} value="April" color="primary">April</option>
    </select>
    </Button>
    </ButtonGroup>
 

    
    {/* <ButtonGroup className="mt-2" vertical>
         <Button onClick={this.handleClickBarArg} color="primary">January</Button>
         <Button onClick={this.handleClickLineArg} color="primary">Febuary</Button>
         <Button onClick={this.handleClickPieArg} color="primary">March</Button>
         <Button onClick={this.handleClickDoughnutArg} color="primary">April</Button>
    </ButtonGroup>   */}
    
     
    {/* } */}
  {/* </Col> */}
  <Col style={{float:"right"}}>
   
  {this.state.Month} 

   </Col>
      <div className="Chart">
      <this.state.ChartType 
      data={this.state.chartData}
      width={70}
      height={35}
      options={{
        title:{
          display:this.props.displayTitle,
          text:'Total Sales Bar Chart',
          position:this.props.titlePosition,
          fontSize:16
        },
        legend:{
          position:this.props.legendPosition,
        }
      }}
      />
      </div> 
      </CardBody>
      </Card> 
      </React.Fragment>
     )
    }
  }

const ChartGraphs = (props) => {
    return (
      <Row>
     <Col lg="6">    
    {<ChartData Month={'January'} ChartType={Line} />}
      </Col>
      <Col lg="6">    
    {<ChartData Month={'Febuary'} ChartType={Line}/>}
      </Col>
      </Row>
    );
  }

  export default ChartGraphs; 
  