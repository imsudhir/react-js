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
  const style1 = {
    backgroundColor:'#85b3e2'
  };
  const navitemlist = [
    {to:'link1', text:'link1'},
    {to:'link2', text:'link2'},
    {to:'link3', text:'link3'},
    {to:'link4', text:'link4'},
  ];
  const Creatitemenunav = (props) =>{
  const navitems = props.navitems;
  console.log(navitems);
  const Createnavitem = navitems.map((item) => 
  <NavItem>
    <NavLink tag={Link} to={item.to}>{item.text}</NavLink>
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
          <NavbarBrand href="/" >reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <DropdownItem divider />
              <Creatitemenunav navitems={navitemlist} />
              <NavItem>
                <NavLink tag={Link} to="/https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu style={style1} right>
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
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    }
  }
  export default NavigationLink
  