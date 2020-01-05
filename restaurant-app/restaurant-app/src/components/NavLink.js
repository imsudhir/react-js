import React, { Component } from 'react'; 
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
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem
  } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faHome,faList,faPlus,faEdit,faSearch, } from '@fortawesome/free-solid-svg-icons'

  const style1 = {
    backgroundColor:'#85b3e2'
  };
  const navitemlist = [
    {to:'Home', text:' Home', icon:faHome},
    {to:'list', text:' List', icon: faList},
    {to:'create', text:' Create', icon: faPlus},
    {to:'search', text:' Search', icon: faSearch},
    {to:'detail', text:' Detail', icon: faCoffee},
    {to:'update', text:' Update', icon: faCoffee}
  ];
  const Creatitemenunav = (props) =>{
  const navitems = props.navitems;
  console.log(navitems);
  const Createnavitem = navitems.map((item) => 
  <NavItem>
  <NavLink tag={Link} to={item.to}> <FontAwesomeIcon icon = {item.icon} />{item.text}</NavLink>
  </NavItem>
   ); 
   console.log(Createnavitem);
   return( 
     <React.Fragment>
     {Createnavitem}
     </React.Fragment>
     ) 
  }
  class NavigationLink extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      }; 
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return <React.Fragment >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" ><img style={{ height:"50px"}} src="./restaurant_img.png" />Restaurant</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <DropdownItem divider />
              <Creatitemenunav navitems={navitemlist} />
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    }
  }
  export default NavigationLink
  