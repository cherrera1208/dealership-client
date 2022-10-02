import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../css/About.css'
import SiteNav from './SiteNav';

class About extends React.Component {
  render() {
    return (
      <>
        <SiteNav />
        <Container className='card-container'>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/carlos Herrera.jpg")} />
            <Accordion className='accordion' defaultActiveKey="0">
              <Accordion.Item eventKey="0"></Accordion.Item>
              {/* <Card.Body> */}
              <Accordion.Header className='aheader'>About the Developer</Accordion.Header>
              <Accordion.Body>
                My background is in avionics for the Navy and property management around greater Seattle. Avionics taught me troubleshooting while adhering to strict protocols utilizing dense technical manuals. I’m training in JavaScript because it is the language of the internet. If there's a webpage that exists, it probably exists with JavaScript.
              </Accordion.Body>
              {/* </Card.Body> */}
            </Accordion>
          </Card>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/david suy.jpg")} />
            <Accordion className='accordion' defaultActiveKey="0">
              <Accordion.Item eventKey="0"></Accordion.Item>
              {/* <Card.Body> */}
              <Accordion.Header >About the Developer</Accordion.Header>
              <Accordion.Body>
                I’m currently studying Full-Stack JavaScript at Code Fellows. As a former Sergeant in the Marine Corps and a former barbershop owner, I’ve had the chance to meet and work with many people from a diverse background. I’ve been told by many people that one of my greatest strengths is my ability to create a comfortable atmosphere for my peers to relax and be themselves. Which then, promotes a good growth mindset environment. I got into software development because I love tech and want to build fun and useful apps that everyone can use. That’s why I chose JavaScript, the accessibility to so many people because of the internet. My Ideal environment is where I can develop apps that can change people’s lives for the better.
              </Accordion.Body>
              {/* </Card.Body> */}
            </Accordion>
          </Card>
          <Card className='list' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../image/Jeffrey Smith.jpg")} />
            <Accordion className='accordion' defaultActiveKey="0">
              <Accordion.Item eventKey="0"></Accordion.Item>
              {/* <Card.Body> */}
              <Accordion.Header >About the Developer</Accordion.Header>
              <Accordion.Body>
                I am Jeffrey Smith. I am a software developer and US Army Veteran.

                My background and experience is within Supply Chain Management along with various IT related roles in configuration and system set-up.

                Throughout my career I have adopted various attributes such as being on-time, always going the extra mile, being well organized and ensuring my deliverables are always met.

                Technology interests me because it changes and it allows me to design similar outcomes in many different ways. It is like solving a puzzle.

              </Accordion.Body>
              {/* </Card.Body> */}
            </Accordion>
          </Card>
        </Container>
        <footer className='footer'>
          <span style={{ color: "purple" }}>&copy; Purple Dealership.</span>
        </footer>
      </>

    );
  }
}

export default About;
