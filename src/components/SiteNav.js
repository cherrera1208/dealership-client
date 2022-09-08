import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LoginButton from './LoginButton';
import '../css/SiteNav.css';

class SiteNav extends React.Component {
  render() {
    const editMode = this.props.editMode;
    // const handleCarFormModal = this.props.handleCarFormModal(true);
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Purple Dealership</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>About</Nav.Link>
              <Nav.Link href='#pricing'>Car Inventory</Nav.Link>
              <Nav.Link href='#contact'>Contact Use</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>About</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Car Inventory
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Contact Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
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
                  <></>
                )}
                <LoginButton className='btn' variant='outline-primary'>
                  Employee Login
                </LoginButton>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default SiteNav;
