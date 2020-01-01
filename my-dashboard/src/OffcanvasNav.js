import ReactDOM from 'react-dom';
import React, { Component } from 'react'; 
import "./Style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell } from '@fortawesome/free-solid-svg-icons'
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler, 
    NavbarBrand,
    CardImg,
    Nav, 
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem
  } from 'reactstrap';

  const element = <FontAwesomeIcon icon={faNewspaper} />
  const faBellicon = <FontAwesomeIcon icon={faBell} />
// ReactDOM.render(element, document.body);
const navitemdata = [
  {to:'/', text:'Dashboard'},
  {to:'/', text:'Team'},
  {to:'/', text:'Sales Report'},
  {to:'/', text:'Sales Chart'},
  {to:'Table', text:'Table'},
  {to:'Table1', text:'Table1'}
];
const Navitemslist = (props)=>{
const navitems = props.navitems; 
console.log(navitems);
const mappednavitems = navitems.map((navitems1) =>
  <NavItem>
    <NavLink title="Home" tag={Link} to={navitems1.to} >{navitems1.text} </NavLink>
  </NavItem>
   );  
   return(
    <React.Fragment>
    {mappednavitems}
    </React.Fragment>
   )
}

  class OffcavassideLink extends Component {
    render() {
    return <React.Fragment >
    <div id="nav" className="nav">
		<div className="icon">
			<ul>
				<NavItem><NavLink title="Home" href="#">
          <CardImg src="https://image.flaticon.com/icons/png/512/51/51078.png"/>
          </NavLink></NavItem>
				<NavItem ><NavLink  href="About">{element}<i className="fa fa-search "></i></NavLink></NavItem>
				<NavItem ><NavLink href="#">{element}<i className="fa fa-edit "></i></NavLink></NavItem>
				<NavItem ><NavLink href="#">{element}<i className="fa fa-cog "></i></NavLink></NavItem>
			</ul>
		</div> 
        <div className="text">
        <ul>
        <Navitemslist navitems={navitemdata}/>
        <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu center>
                  <DropdownItem>
                    Option 1 
                    </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        {/* <NavItem><NavLink title="Home" tag={Link} to="/Home">Home</NavLink></NavItem>
        <NavItem><NavLink tag={Link} to="/About">About</NavLink></NavItem>
        <NavItem><NavLink tag={Link} to="/Contact" >Contact</NavLink></NavItem>
        <NavItem><NavLink tag={Link} to="/Team">Team</NavLink></NavItem> */}
        </ul>
        </div>
		{/* <div className="info">
			<div className="logo"><p>LOGO</p></div>
			<div className="name">Co. Name</div>
			<div className="quote">WHAT WE DO IS WHO WE ARE</div>
			<div className="social">
				<a target="_blank" href="https://twitter.com/tmrDevelops"><i className="fa fa-twitter"></i></a>
			</div>
		</div> */}
	</div>
    </React.Fragment>
    }
}
export default OffcavassideLink