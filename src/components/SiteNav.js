import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Button } from 'react-bootstrap';
import Logo from '../image/Logo.png'
import '../css/SiteNav.css';

class SiteNav extends React.Component {
  render() {
    // const editMode = this.props.editMode;
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
              <Nav.Link href='https://cherrerawebdev.netlify.app/about'>About</Nav.Link>
              <Nav.Link href='mailto:cherrera.dev@gmail.com'>Contact</Nav.Link>
            </Nav>
            <Nav>

              <Nav.Item className='btn-container'>
                <Button onClick={() => this.props.handleCarFormModal(true)}>
                  Add Car
                </Button>
                {this.props.auth0.isAuthenticated
                  ? <LogoutButton />
                  : <LoginButton />}
                {/* {editMode ? (
                  (<Button onClick={() => this.props.handleCarFormModal(true)}>
                    Add Car
                  </Button>)
                ) : (
                  this.props.auth0.isAuthenticated
                    ? <LogoutButton />
                    : <LoginButton />
                )} */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    );
  }
}

export default withAuth0(SiteNav);
