import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../css/About.css'
import SiteNav from './SiteNav';

class About extends React.Component {
  render() {
    return (
      <>
          {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Purple Dealership</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
        <SiteNav/>
       
      
        
        <Container className='card-container'>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/Jeffrey Smith.jpg")}/>
              <Accordion className='accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0"></Accordion.Item>
                  {/* <Card.Body> */}
                    <Accordion.Header className='aheader'>About the Developer</Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body> 
                  {/* </Card.Body> */}
             </Accordion>
             </Card>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/Jeffrey Smith.jpg")}/>
              <Accordion className='accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0"></Accordion.Item>
                  {/* <Card.Body> */}
                    <Accordion.Header >About the Developer</Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body> 
                  {/* </Card.Body> */}
            </Accordion>
          </Card>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/Jeffrey Smith.jpg")}/>
              <Accordion className='accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0"></Accordion.Item>
                  {/* <Card.Body> */}
                    <Accordion.Header >About the Developer</Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body> 
                  {/* </Card.Body> */}
            </Accordion>
          </Card>
          </Container>
          <footer className='footer'>
            <span style={{ color: "purple"}}>&copy; Purple Dealership.</span>
          </footer>
        </>
        
    );
  }
}

export default About;
