import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Button } from 'react-bootstrap';
import Logo from '../image/Logo.png'
import '../css/SiteNav.css';

class SiteNav extends React.Component {
  render() {
    const editMode = this.props.editMode;
    // const handleCarFormModal = this.props.handleCarFormModal(true);
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}

            Purple Dealership

          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='http://localhost:3000/about'>About</Nav.Link>
              <Nav.Link href='http://localhost:3000'>Car Inventory</Nav.Link>
              <Nav.Link href='#http://localhost:3000'>Contact Use</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='http://localhost:3000/about'>
                  About
                </NavDropdown.Item>
                <NavDropdown.Item href='http://localhost:3000/'>
                  Car Inventory
                </NavDropdown.Item>
                <NavDropdown.Item href='http://localhost:3000/'>
                  Contact Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='http://localhost:3000/about'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Item className='btn-container'>
                {editMode ? (
                  <Button onClick={() => this.props.handleCarFormModal(true)}>
                    Add Car
                  </Button>
                ) : (
                  this.props.auth0.isAuthenticated
                    ? <LogoutButton />
                    : <LoginButton />
                )}
                {/* <LoginButton className='btn' variant='outline-primary'>
                  Employee Login
                </LoginButton> */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(SiteNav);
