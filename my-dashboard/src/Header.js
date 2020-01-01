import React, { useState }from 'react';
import "./Style.css";
import {
    Card, Row, Popover, PopoverHeader, PopoverBody, Collapse, Col, Nav, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup, Badge, UncontrolledDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faNewspaper,faBell } from '@fortawesome/free-solid-svg-icons'
  const faBellicon = <FontAwesomeIcon icon={faBell} />
  console.log("dataaa");

  const Notificationdata = [
      {from:'Bob1', message:'hi john, this is bob1'},
      {from:'Bob2', message:'hi john, this is bob2'},
      {from:'Bob3', message:'hi john, this is bob3'},
      {from:'Bob4', message:'hi john, this is bob4'},
      {from:'Bob5', message:'hi john, this is bob5'},
  ];
class NotifyCount extends React.Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };  
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
      this.fetchUsers();
    }
    render() {
      const { isLoading, users, error } = this.state;
      const count = users.length;
         return (
        <React.Fragment>
        {!isLoading ? count:'..'}
        </React.Fragment>
      );
    }
  }

class Notify extends React.Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
  
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.fetchUsers();
    }
    
    render() {
        
      const { isLoading, users, error } = this.state;
         return (
        <React.Fragment>
           {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map(user => {
               const { username, name, email } = user;
              return (
                <React.Fragment>
                <DropdownItem success>
                 {username}
                </DropdownItem >
                <DropdownItem divider />
                </React.Fragment>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }






    const Notification = (jsongetNotificationdata) =>{    
     return () =>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(jsongetNotification => jsongetNotification.map(items =>items)
        )
      }
    }
 
 
 
  const Header = (props) => { 
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
    return(
            <React.Fragment>
                <div className="container my_header mt-3">
                <Row>
                <Col lg="10" sm="6" xs="9">
                <h2 className="text-center">My Dashboard</h2>
                </Col>
                <Col lg="2" sm="6" xs="3">
                 <Button id="Popover1" className="my_notify mr-2" type="button">
                {faBellicon} 
                <Badge pill color="success"><NotifyCount /></Badge>
                </Button>
                <Popover placement="right" placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>
                     Popover Title
                </PopoverHeader> 
                <PopoverBody> 
                <Notify />
                </PopoverBody>
                </Popover>
               </Col>  
        </Row>
        </div>
            </React.Fragment>
 )
    }
    export default Header